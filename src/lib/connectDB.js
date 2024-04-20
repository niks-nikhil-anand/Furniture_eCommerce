import * as mongoose from "mongoose";

export default async () => {
    try {
        const DB_OPTION = {
            user: 'niksananddeveloper',
            pass: 'X6qa8y7oFgCMJmOt',
            authSource: "admin", 
            dbName:'furniture'
        };

        await mongoose.connect("mongodb+srv://niksananddeveloper:X6qa8y7oFgCMJmOt@cluster0.nrvgevm.mongodb.net/furniture", DB_OPTION);
        console.log("Database connected Successfully....");
        console.log(process.env.customKey)
    } catch (error) {
        console.log(error);
    }
};
