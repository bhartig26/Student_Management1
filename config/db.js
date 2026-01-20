const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); 
    console.log("MONGODB CONNECTED SUCCESSFULLY"); 
  } catch (error) {
    console.log("DB CONNECTION FAILED");
    process.exit(1);
  }
};

module.exports = connectDB;
