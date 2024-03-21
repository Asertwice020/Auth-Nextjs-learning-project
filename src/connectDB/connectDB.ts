import mongoose from "mongoose";
import configEnv from "@/configEnv";


async function connectDB() {
  try {
    mongoose.connect(configEnv.MONGO_URI)
    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log(`mongo db is connected to the server!`);
    })

    connection.on('error', (error) => {
      console.log(`Mongo DB Connection Error :: Please Make Sure :: DATABASE IS UP AND RUNNING :: ${error}`);
      process.exit();
    })

  } catch (error) {
    console.error(`Connecting To DB :: FACED AN ISSUE ::\n${error}`);
  }
}