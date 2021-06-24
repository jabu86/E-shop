import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(
      `Connected to MongoDb Host: ${con.connection.host}  MongoDb Name: ${con.connection.name}`.cyan.underline
    );
  } catch (error) {
    console.error(`ERROR: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;