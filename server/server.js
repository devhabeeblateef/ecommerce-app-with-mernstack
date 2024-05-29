import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middeware/errorMiddleware.js';
const app = express();
dotenv.config();
const port = process.env.PORT_NUMBER 

app.get('/', (req, res) => {
    res.send("Server is ready to serve");
})

app.use(notFound)
app.use(errorHandler)
app.use('/api/users', userRoutes);

app.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`)
})