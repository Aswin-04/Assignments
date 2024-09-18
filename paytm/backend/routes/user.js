const express = require("express");

const z = require("zod");
const jwt = require("jsonwebtoken");
const {User, Account} = require("../db");

const { JWT_SECRET } = require("../config");
const {authMiddleware} = require("../middlewares/authMiddleware")
const router = express.Router();

const signupBody = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  firstName: z.string(),
  lastName: z.string(),
});

router.post("/signup", async function (req, res) {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  try {
    const user = await User.create(req.body);
    const userId = user._id;

    await Account.create({
      userId,
      balance: Math.floor(Math.random() * 10000) 
    })

    const token = jwt.sign(
      {
        userId,
      },
      JWT_SECRET
    );
    res.status(200).json({
      message: "User created successfully",
      token: token,
    });
  } catch (e) {
    res.status(411).json({
      message: "Database is down",
    });
  }

});

const signinBody = z.object({
  username: z.string().email(),
  password: z.string().min(8)
})

router.post('/signin', async function(req, res) {

  const { success } = signinBody.safeParse(req.body)
  if(!success) {
    return res.status(411).json({
      message: "Incorrect Inputs"
    })
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  })

  if(!user) {
    return res.status(411).json({
      message: "Error while logging in"
    })
  }

  const token = jwt.sign({
    userId: user._id
  }, JWT_SECRET)

  res.status(200).json({
    token
  })

})

const updateBody = z.object({
  password: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional()
})

router.put('/', authMiddleware, async function(req, res) {
  const {success} = updateBody.safeParse(req.body)
  if(!success) {
    return res.status(411).json({
      message: "Error while updating information"
    })
  }


  try {
    await User.updateOne({ _id: req.userId }, req.body)
    return res.status(200).json({
      message: "Updated successfully"
    })

  } catch(e) {
    return res.status(411).json({
      message: "Error while updating information"
    })
  }

})

router.get('/bulk', async function(req, res) {
  const filter = req.query.filter || ""

  try {
    const users = await User.find({
      $or: [
        {firstName: {
          "$regex": `^${filter}`,
          "$options": 'i'
          }
        }, {
          lastName: {
            "$regex": `^${filter}`,
            "$options": 'i'
          }
        }]
    }) 

    return res.status(200).json({
      users: users.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      }))
    })

  } catch(e) {
      return res.status(500).json({
        message: "An error occurred while fetching users"
      })
  }
})

module.exports = router

