const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const {User, Course} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    await User.create({
        username, 
        password,
    })

    res.json({
        msg: "User created successfully"
    })

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const yourToken = jwt.sign({
        username,
        password
    }, JWT_SECRET)

    res.json({
        token: yourToken
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const allCourses = Course.find({})
    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.username
    await User.updateOne(username, {
        "$push": {
            purchasedCourses: courseId
        }
    })

    res.json({
        message: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.username
    const user = await User.findOne(username)
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router