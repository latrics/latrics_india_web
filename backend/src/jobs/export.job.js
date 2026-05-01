import cron from 'node-cron';
import Contact from '../models/Contact.js';
import { convertToCSV } from '../services/csv.service.js';
import { sendLeadsEmail } from '../services/email.service.js';
import { config } from '../config/env.js';

export const initCronJobs = () => {
  cron.schedule(config.cronSchedule, async () => {
    console.log('Running scheduled leads export...');
    try {
      const data = await Contact.find({ exported: false });

      if (!data.length) {
        console.log('No new leads to export.');
        return;
      }

      const csv = convertToCSV(data);
      await sendLeadsEmail(csv);

      await Contact.updateMany(
        { exported: false },
        { exported: true }
      );

      console.log(`Successfully exported ${data.length} leads.`);
    } catch (error) {
      console.error('Error during scheduled leads export:', error);
    }
  });
};
