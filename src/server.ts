import express from 'express';
import userRoutes from './routers/userRouter';
import lobbyRoutes from './routers/lobbyRouter';

const app = express();
const PORT = 8000;

app.use(express.json());

app.use('/user', userRoutes);
app.use('/lobby', lobbyRoutes);




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

