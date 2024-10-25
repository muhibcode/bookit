import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: false,
      //   useCreateIndex: true,
    })
    .then(() => console.log("connected to local database"));
};

export default dbConnect;
