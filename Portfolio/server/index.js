import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import EmailRoute from './routes/EmailRoute.js';
import path from 'path';


// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

//middleware
app.use(cors())
app.use(express.json())

//static files
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't match one above,
// send back index.html so that React Router can handle the route.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });

//routes
app.use('/api/v1/portfolio', EmailRoute)


const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
    console.log("server is upppppp", PORT)
})