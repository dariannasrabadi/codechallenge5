const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messageRoute = require('./routes/messageboard.route.js');


app.use(express.static('server/public/'));
app.use(bodyParser.json());

app.use('/message', messageRoute);



/** ---------- MONGOOSE ------------ **/
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/messageBoard';


mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');    
});

mongoose.connection.on('error', () => {
    console.log('mongoose connection failed'); 
});


/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
