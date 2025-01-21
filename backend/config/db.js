
import mongoose from "mongoose";

export const connectDB = async () => {
      await mongoose.connect('mongodb+srv://food:food123@cluster0.n8duc.mongodb.net/Food_data').then(() => console.log("DB connected successfully...."));
}

//user-food
//pass-food123
//mongodb+srv://food:food123@cluster0.n8duc.mongodb.net/?