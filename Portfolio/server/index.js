import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import EmailRoute from './routes/EmailRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(cors());
app.use(express.json());

// Get __dirname equivalent in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't match one above,
// send back index.html so that React Router can handle the route.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Routes
app.use('/api/v1/portfolio', EmailRoute);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
