import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

// import models routes for CRUD
import Game from './app/models/game';
import { getGames, getGame, postGame, deleteGame } from './app/routes/game';

const app = express(); //import express libary
const port = process.env.PORT || 3000; //running on port localhost:4000

//Set up mongoose connection
mongoose.connect('mongodb://thibaptistella:93032660mi@ds123146.mlab.com:23146/retro-games-library');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Body parser and Morgan middleware(run between back and Frontend)
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
// express directory folder
app.use(express.static(__dirname + '/client/dist'));

// make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API routes
app.route('/games')
  // create a game
  .post(postGame)
  // get all the games
  .get(getGames);
app.route('/games/:id')
  // get a single game by id
  .get(getGame)
  // delete a single game by id
  .delete(deleteGame);

// ...For all the other requests just sends back the Homepage
app.route("*").get((req, res) => {
  res.sendFile('client/dist/index.html', { root: __dirname });
});

// use var port created on top with port number
app.listen(port);
//log port number
console.log(`listening on port ${port}`);
