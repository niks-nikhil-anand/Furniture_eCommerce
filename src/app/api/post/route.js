import mongoose from "mongoose"; // Import Mongoose

import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import Product from "@/models/productModels";

// Function to connect to MongoDB
async function connectToDB() {
  await connectDB();
}

export async function GET(req) {
  try {
    // Connect to MongoDB
    await connectToDB();
    const result = await Product.find()

    return NextResponse.json({
      "result" : result
    }, {
      status: 200
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      msg: "something went wrong"
    }, {
      status: 400
    });
  }
}

// async function generateAndInsertSampleData() {
//   try {
//     // Connect to MongoDB
//     await connectToDB();

//     const sampleData = [
//       {
//         title: "Guise Console Table",
//         description: "Made from reclaimed teak, the Guise Console Table is an eye catching, intricately hand carved reproduction of a handsome antique.",
//         content: "It features swooping carved legs which end in paw feet, scroll and shell motif along its apron and a teak top.",
//         imageUrl: "https://s3.amazonaws.com/viceroycasa-prod-bucket/uploads/image/cover/3231/1.jpg",
//         category: "furniture",
//         subcategory: "Table",
//         slug: "Guise-Console-Table"
//       }
//     ];

//     // Insert the sample data objects into MongoDB
//     await Product.insertMany(sampleData);

//     console.log("Sample data inserted successfully!");
//   } catch (error) {
//     console.error("Error inserting sample data:", error);
//   } finally {
//     mongoose.disconnect(); // Close the connection after inserting data
//   }
// }

// // Call the function to generate and insert sample data
// generateAndInsertSampleData();


