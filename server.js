const express= require('express')
const morgan=require('morgan')
const colors=require('colors')
const bodyParser=require('body-parser')
const cors= require('cors')
const dotenv= require('dotenv')
const connectDB = require('./config/db')
const errorHandler = require('./middlewares/errorMiddleware')
// routes path
const authRoutes= require('./routes/authRoutes');
//dotenv
dotenv.config()
//mongo connection
connectDB();
const app= express();
// midddleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'))
app.use(errorHandler);

const PORT=process.env.PORT || 8080;

//Routing
app.use('/api/v1/auth',authRoutes);



app.listen(PORT,()=>{
  console.log(`server running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white);
});