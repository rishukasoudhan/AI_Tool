const express= require('express')
const morgan=require('morgan')
const colors=require('colors')
const bodyParser=require('body-parser')
const cors= require('cors')
const dotenv= require('dotenv')
const connetDB = require('./config/db')
const authRoutes= require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorMiddleware')
//dotenv
dotenv.config()
//mongo connection
connetDB();
const app= express();

const PORT=process.env.PORT || 8080;

//Routing
app.use('/api/v1/auth',authRoutes);

// midddleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'))
app.use(errorHandler);



app.listen(PORT,()=>{
  console.log(`server running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white);
});