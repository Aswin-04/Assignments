const {Router} = require('express')
const { authMiddleware } = require('../middlewares/userAuth');
const {Account} = require('../db/index')
const { default: mongoose } = require('mongoose')

const router = Router()


router.get('/balance', authMiddleware, async (req, res) => {
  
  const userId = req.userId

  try {
    const account = await Account.findOne({userId})
    res.status(200).json({
      balance: account.balance
    })
  } catch (e) {
    res.status(404).json({message: "Something went wrong"})
  }
})

router.post('/transfer', authMiddleware, async (req, res) => {
  const session = await mongoose.startSession()

  session.startTransaction()
  const {amount, to} = req.body
  const account = await Account.findOne({userId: req.userId}).session(session)
  
  if(!account || account.balance < amount) {
    await session.abortTransaction()
    return res.status(400).json({
      message: "Insufficient balance"
    })
  }

  const toAccount = await Account.findOne({userId: to})

  if(!toAccount) {
    await session.abortTransaction()
    return res.status(400).json({
      message: "Invalid account"
    })
  }

  // perform the Transfer

  await Account.updateOne({userId: req.userId}, { $inc: {balance: -amount}}).session(session)
  await Account.updateOne({userId: to}, { $inc: {balance: amount}}).session(session)

  // Commit the transaction
  await session.commitTransaction()
  res.json({
    message: "Transfer Successful"
  })
})


module.exports = router
