import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middeware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config();
const port = process.env.PORT_NUMBER 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


try{
    connectDB();
}catch(error){
    console.log(error.message);
}

app.get('/', (req, res) => {
    res.send("Okay")
})

app.use('/api/users', userRoutes)
app.use(notFound);
app.use(errorHandler);

app.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`)
})