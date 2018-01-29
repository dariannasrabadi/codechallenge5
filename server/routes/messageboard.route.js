const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')

let Message = mongoose.model('Message', new mongoose.Schema(
    {
        name: {type: String, required: true},
        message: {type: String, required: true}
    }
));


router.get('/', (req, res) => {
    Message.find({}, (error, messages) => {
        if(error) {
            console.log('error on find:', error);
            res.sendStatus(500);
        } else {
            res.send(messages);
        }
    })
});


router.post('/', (req, res) => {
    let newMessage = new Message(req.body);

    newMessage.save((error, saved) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });

});


module.exports = router