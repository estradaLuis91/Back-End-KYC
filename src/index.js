const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express();
mongoose.connect('mongodb+srv://estradalluis91:1234@cluster0.dnejzpy.mongodb.net/?retryWrites=true&w=majority')
.then((db) => console.log('DB IS conected')) 
.catch((err) => console.error(err) 
    );


//Settings
app.set('port',process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
// app.use( cookieParse());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret : 'encrypted9110',
    resave : false,
    saveUninitialized : false
}));

//Static Files
 app.use(express.static(__dirname + '/public'))

 //Routes
 app.use(require('./routes/roots'));

//Server listen
app.listen(3000,() =>{
    console.log('server in port ' ,app.get('port'))
});

