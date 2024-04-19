import mongoose from "mongoose";
export default async () => {
  try {
    const databaseName = "carpost";
    const connectionString = `mongodb://localhost:27017/${databaseName}`; //TO DO: Use online mongoose database
    await mongoose.connect(connectionString);
    mongoose.connection.on("error", (err) => {
      throw new Error(err);
    });
  } catch (err) {
    console.log(err.message)
    process.exit(1);
  }
};
