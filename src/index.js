import { configDotenv } from "dotenv";
import connectDB from "./db/dbConfig.js";

configDotenv();
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running at port:
                ${process.env.PORT}`);

        });
    })
    .catch((err) => {
        console.log("Mongo db connection failed!! ", err)
    });





/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listing on port ${process.env.PORT}`);

        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err;
    }
})()*/