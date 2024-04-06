import mongoose from "mongoose";
export default async () => {
    try {
        const databaseName = 'carpost';
        const connectionString = `mongodb://localhost:27017/${databaseName}`;
        await mongoose.connect(connectionString);
        mongoose.connection.on('error', (err) => {
            throw new Error(err);
        });
    } catch (err) {
        process.exit(1);
    }
};