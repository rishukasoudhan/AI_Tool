const mongoose =require('mongoose')
const colors=require('colors')

const connectDB= async ()=>{
   try{
      await mongoose.connect(process.env.MONGO_URI)
      console.log(`Connected to DB ${mongoose.connection.host}`.bgGreen.white);
   }
   catch(err){
     console.log(`Error ${err}`.bgRed.white);
   }
}
module.exports=connectDB;