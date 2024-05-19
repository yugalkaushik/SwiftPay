//HANDLES MONEY TRANSFER OPERATIONS

const express = require('express');
const router = express.Router();
const auth =  require('../middleware/auth');
const User = require('../models/User');
const {check, validationResult} = require('express-validator');

router.post(
    '/transfer',
    [
        auth,
        check('receipientEmail','Please Include a valid email').isEmail(),
        check('amount','Please enter a valid amount').isFloat({gt:0})
    ],
    async (req,res) => {
        const error = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        
        const  { recipientEmail, amount} = req.body;

        try{
            const sender = await User.findBYID(req.user.id);
            if(!sender || sender.balance<amount){
                return res.status(400).json({ msg: 'Insufficient funds' });
            } 
            const recipient = await User.findOne({ email: recipientEmail });
            if (!recipient) {
                return res.status(400).json({ msg: 'Recipient not found' });
            }

            sender.balance -= amount;
            recipient.balance += amount;

            await sender.save();
            await recipient.save();

            res.json({ msg:'Transfer successful'});
        } catch(err){
            console.error(err.message);
            res.status(500).send('Sender error');
        }
    }
);

module.exports = router;