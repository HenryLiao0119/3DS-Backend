// import for database/model
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // uses enviroment variable
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    });

    // shows it is connected in the terminal
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // shows there is an error
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
