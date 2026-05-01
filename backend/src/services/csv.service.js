import { Parser } from 'json2csv';

export const convertToCSV = (data) => {
  const fields = ['name', 'email', 'phone', 'message', 'createdAt'];
  const opts = { fields };
  const parser = new Parser(opts);
  return parser.parse(data);
};
