import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
   .connect("mongodb+srv://rayane:"+process.env.PASSWORD+"@cluster0.4cfsbfo.mongodb.net/")
     //.connect("mongodb://127.0.0.1:27017/gip")
    .then(() => console.log("successfully connected to DB"))
    .catch((e) => console.log(e));
};

export default connectToDB;