const mongoose=require("mongoose")

const connectDB = async()=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
                  .then(()=>console.log("data base connect succsessfully"))
}

module.exports=connectDB