const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { Account } = require("../db");
const { mongo, default: mongoose } = require("mongoose");
const router = express.Router()

router.get('/balance', authMiddleware, async function(req, res) {

  try{
    const account = await Account.findOne({userId: req.userId})
    return res.status(200).json({
      balance: account.balance
    })

  } catch(e) {
      return res.status(411).json({})
  }

})

router.post('/transfer', authMiddleware, async function (req, res) {
  const session = await mongoose.startSession()

  session.startTransaction()

  const {amount, to} = req.body

  try {
    const account = await Account.findOne({userId: req.userId})
  
    if(!account || account.balance < amount) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        message: "Insufficient balance"
      })
    }
  
    const toAccount = await Account.findOne({userId: to})
  
    if(!toAccount) {
      await session.abortTransaction()
      session.endSession();
      return res.status(400).json({
        message: "Invalid account"
      })
    }
  
    await Account.updateOne({userId: req.userId}, {
      $inc: {
        balance: -amount
      }
    }).session(session)
  
    await Account.updateOne({userId: to}, {
      $inc: {
        balance: amount
      }
    }).session(session)
  
    await session.commitTransaction()
    session.endSession();
  
    res.json({
      message: "Transfer successful"
    })
  }  catch (e) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({ message: "Internal server error" });
  }
  

})


module.exports = router;