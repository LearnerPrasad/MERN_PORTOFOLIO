import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import EmailRoute from './routes/EmailRoute.js'


// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

//middleware
app.use(cors())
app.use(express.json())


//routes
app.use('/api/v1/portfolio', EmailRoute)


const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
    console.log("server is upppppp", PORT)
})