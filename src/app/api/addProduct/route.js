import connectDB from "@/lib/connectDB"; // Check the correct path to connectDB
import { NextResponse } from "next/server"; // Verify the import for NextResponse
import Product from "@/models/productModels"; // Check the correct path to Product model

// Function to connect to MongoDB
async function connectToDB() {
  await connectDB(); // Assuming connectDB is a function that establishes MongoDB connection
}

export async function POST(req) {
    const data = req.body
    try {
     
      await connectToDB();
        
      
      const result = await Product.create(data);
  
      
      return NextResponse.json(result, { status: 200 });
    } catch (error) {
      console.error(error); 
      return NextResponse.json({ msg: "Something went wrong" }, { status: 400 });
    }
  }