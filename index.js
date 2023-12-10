require('dotenv').config();

const connectToMongo = require('./db');

const express = require('express');
const URL = process.env.BASE_URL||5000;

const bodyParser = require('body-parser');

const app = express();
PORT=5000 || process.env.BASE_URL

app.use(express.json());


var cors = require('cors');

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};
app.use(cors(corsConfig));

app.use('/api/categorize', require('./Routes/categorize'));
app.use('/api/cloze', require('./Routes/cloze'));
app.use('/api/comprehension', require('./Routes/comprehension'));

// app.use(bodyParser.json({ limit: '2mb' })); // Adjust the limit as needed


app.get('/', (req, res) => {
  res.json('hello');
});

  // Start the Express app
  app.listen(PORT,async() => {
    try{
      await connectToMongo();
    console.log(`iBlog listening at ${URL}`);
  }catch(e){
    console.log("error: ", e.message);}
  });