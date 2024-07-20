import express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});