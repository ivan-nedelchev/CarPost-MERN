import mongoose from "mongoose";

export default async () => {
  try {
    const connectionString = process.env.MONGO_URI;
    await mongoose.connect(connectionString);
    mongoose.connection.on("error", (err) => {
      throw new Error(err);
    });
  } catch (err) {
    console.log(err.message)
    process.exit(1);
  }
};
