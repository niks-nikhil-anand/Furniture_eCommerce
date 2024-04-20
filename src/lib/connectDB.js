import mongoose from "mongoose";

export default async () => {
    try {
        const DB_OPTION = {
            dbName : process.env.DBNAME,
            user : process.env.DBUSERNAME,
            pass: process.env.DBPASSWORD,
            authSource :process.env.DBAUTHSOURCE
        }
        await mongoose.connect(process.env.DATABASE_URI , DB_OPTION)
        console.log("Database connected Successfully....")
    } catch (error) {
        console.log(error)
    }
}