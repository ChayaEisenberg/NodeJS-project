import { configDotenv } from 'dotenv';
configDotenv()
import  express  from 'express';
const app = express();
import volunteersRouter from './routers/VolunteersRouter.js';
const hostname = process.env.HOST_NAME;//'127.0.0.1';//localhost
const port = process.env.PORT;
console.log(4);
app.use(express.json());//will extract data from body - so we don't ned to register to 'data' and 'end' events


app.use('/api/volunteers', volunteersRouter);
// app.use('/', (req, res) => {
//     res.send('welcome to our api');
// })
//app.use()//handle errors

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

