const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI,{
    useNewUrlParser : true,
    userCreateIndex : true
})
.then(db=>console.log('connection successfull!'))
.catch(err=>console.log(err));