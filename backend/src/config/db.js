const mongoose = require("mongoose");
const env = require("./env");

async function connectDB() {
  try {
    const conn = await mongoose.connect(env.MONGO_URI, {
      dbName: env.DATABASE_NAME,
    });
    console.log(`[DB] ✅ MongoDB connected: ${conn.connection.host} (database: ${env.DATABASE_NAME})`);
  } catch (error) {
    console.error(`[DB] ❌ Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
}

module.exports = connectDB;
