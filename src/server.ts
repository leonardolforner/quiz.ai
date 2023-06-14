import express from 'express';
import userRoutes from '../src/routers/userRouter';

const app = express();
const PORT = 8000;

app.use('/user', userRoutes);




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

