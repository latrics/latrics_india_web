const mongoose = require("mongoose");
const env = require("./env");

async function connectDB() {
  try {
    const conn = await mongoose.connect(env.MONGO_URI);
    console.log(`[DB] ✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[DB] ❌ Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
}

module.exports = connectDB;
