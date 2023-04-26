import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb+srv://vaibhav_agar:vaibhav_agar@cluster0.va8ynce.mongodb.net/?retryWrites=true&w=majority", {
      dbName: "backend_db",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};