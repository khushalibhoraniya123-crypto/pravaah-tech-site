import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async (): Promise<boolean> => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pravaah_technology';
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000,
    });
    isConnected = true;
    console.log(' [MongoDB] Successfully connected to database.');
    return true;
  } catch (error) {
    isConnected = false;
    console.warn(' [MongoDB] Connection to MongoDB failed or timed out. Operating in memory-fallback mode for inquiries & admin.');
    return false;
  }
};

export const getDBStatus = () => isConnected;
