const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,User,Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const secretKey = 'secret';

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        const username = req.body.username;
        const password = req.body.password;
    
        await Admin.create({
            username,
            password
        })
        res.json({
            message: "Admin created successfully"
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password
    console.log(secretKey);
    const user = Admin.find({
        username,
        password
    
    })

    if(user){
        const token = jwt.sign({username:username},secretKey);
        res.json({
            token: token
        })
    }
    else{
        res.status(404).json({
            message:"wrong username and password"
        })
    }


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;