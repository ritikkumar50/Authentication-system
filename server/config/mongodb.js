import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log('Mongodb connected'));
    mongoose.connection.on('disconnected', () => console.log('Mongodb disconnected'));
    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/auth-project`);
};

export default connectDB;