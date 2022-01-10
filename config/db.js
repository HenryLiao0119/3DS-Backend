// import for database/model
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // uses enviroment variable
    const conn = await mongoose.connect(
      'mongodb+srv://chanliliao:H119d201m611d215@cluster0.mtrqa.mongodb.net/3DSociety?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
      }
    );

    // shows it is connected in the terminal
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // shows there is an error
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
