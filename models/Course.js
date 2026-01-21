const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:String,
    duration:String,
    fees:Number
});

module.exports = mongoose.model("Course",courseSchema);