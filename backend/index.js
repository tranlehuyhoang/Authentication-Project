
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
dotenv.config();
connectDB();
const port = 8000 || 3000;
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static(join(__dirname, 'upload')));


app.use(express.static(join(__dirname, 'frontend', 'dist')));

app.get('/', (req, res) => res.send('Server ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => console.log(`Server running on port ${8000}`));
