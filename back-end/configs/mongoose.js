import mongoose from "mongoose";
const databaseName = "carpost";
export default async () => {
  try {
    const connectionString = `${process.env.MONGO_URI}${databaseName}`; //TO DO: Use online mongoose database
    await mongoose.connect(connectionString);
    mongoose.connection.on("error", (err) => {
      throw new Error(err);
    });
  } catch (err) {
    console.log(err.message)
    process.exit(1);
  }
};
