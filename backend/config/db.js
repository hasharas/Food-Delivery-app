
import mongoose from "mongoose";

export const connectDB = async () => {
      await mongoose.connect('mongodb+srv://hasharamsankalpam:1111@cluster0.yqsksrw.mongodb.net/Food Delivery').then(()=>console.log("DB connected"));      
}