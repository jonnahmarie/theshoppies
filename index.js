require('dotenv').config();
import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({ extended:true }))
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next();
});

routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)

app.listen(PORT, () =>
console.log(`Your server is running on port ${PORT}`))