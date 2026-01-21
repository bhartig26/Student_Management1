const Course = require("../models/Course");

// exports.createCourse = async(req,res ) => {
//     const course = await Course.create(req,res);
//     res.json(200).json({message:"course create successfully",course});
// }

// exports.getCourses = async (req,res)=> {
//     res.json(await Course.find());
// }

exports.createCourse = async (req, res) => {
  res.json({ message: "Course created" });
};

exports.getCourse =async  (req, res) => {
  res.json(await Course.find() );
};
