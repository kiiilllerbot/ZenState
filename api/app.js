import express from 'express';
import 'dotenv/config';
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log("Server is running in port: ", PORT);
})