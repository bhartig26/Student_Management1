const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {createCourse,getCourse} = require("../controllers/courseController");

router.post("/create",auth,role("admin"),createCourse);
router.get("/",auth,getCourse);

module.exports=router;