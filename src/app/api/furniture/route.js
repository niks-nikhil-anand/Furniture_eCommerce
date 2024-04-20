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
    const result = await Product.find({ category: "furniture" });

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
//         title: "Vintage Floral Armchair",
//         description: "Add a touch of elegance to your living space with this vintage floral armchair. Featuring a plush seat and intricately carved wooden frame.",
//         content: "The floral pattern upholstery and curved armrests give it a classic yet cozy appeal.",
//         imageUrl: "https://via.placeholder.com/600x400",
//         category: "furniture",
//         subcategory: "Chair",
//         slug: "Vintage-Floral-Armchair"
//       },
//       {
//         title: "Rustic Wooden Bed Frame",
//         description: "Crafted from solid pine wood, this rustic bed frame adds warmth and charm to your bedroom.",
//         content: "The natural wood grain and sturdy construction ensure durability and style.",
//         imageUrl: "https://via.placeholder.com/600x400",
//         category: "furniture",
//         subcategory: "Bed",
//         slug: "Rustic-Wooden-Bed-Frame"
//       },
//       {
//         title: "Sunflower Bouquet",
//         description: "Brighten up any room with this vibrant sunflower bouquet. Perfect for adding a touch of summer to your home decor.",
//         content: "The cheerful yellow blooms and lush greenery create a lively and inviting atmosphere.",
//         imageUrl: "https://via.placeholder.com/600x400",
//         category: "flower",
//         subcategory: "Bouquet",
//         slug: "Sunflower-Bouquet"
//       },
//       {
//         title: "Modern Glass Coffee Table",
//         description: "Sleek and contemporary, this glass coffee table adds a minimalist touch to your living room.",
//         content: "The tempered glass top and geometric metal base create a stylish focal point.",
//         imageUrl: "https://via.placeholder.com/600x400",
//         category: "furniture",
//         subcategory: "Table",
//         slug: "Modern-Glass-Coffee-Table"
//       },
//       {
//         title: "Tulip Garden Wall Art",
//         description: "Bring the beauty of spring indoors with this stunning tulip garden wall art. Perfect for adding a pop of color to any room.",
//         content: "The vibrant tulip blooms and green foliage are captured in exquisite detail, creating a botanical masterpiece.",
//         imageUrl: "https://via.placeholder.com/600x400",
//         category: "flower",
//         subcategory: "Wall Art",
//         slug: "Tulip-Garden-Wall-Art"
//       },
//       {
//         title: "Antique Oak Dining Table",
//         description: "Create a charming dining space with this antique oak dining table. Featuring a sturdy construction and classic design.",
//         content: "The rich oak finish and carved details add a touch of elegance to any mealtime.",
//         imageUrl: "https://via.placeholder.com/600x400",
//         category: "furniture",
//         subcategory: "Table",
//         slug: "Antique-Oak-Dining-Table"
//       },
//       {
//         title: "Orchid Arrangement",
//         description: "Elevate your home decor with this elegant orchid arrangement. The delicate blooms and graceful foliage add a touch of luxury.",
//         content: "The arrangement is beautifully presented in a ceramic vase, making it a perfect centerpiece.",
//         imageUrl: "https://via.placeholder.com/600x400",
//         category: "flower",
//         subcategory: "Arrangement",
//         slug: "Orchid-Arrangement"
//       },
//       {
//         title: "Mid-Century Modern Sofa",
//         description: "Add a retro flair to your living room with this mid-century modern sofa. Featuring tapered legs and button-tufted upholstery.",
//         content: "The clean lines and minimalist design make it a versatile addition to any contemporary space.",
//         imageUrl: "https://via.placeholder.com/600x400",
//         category: "furniture",
//         subcategory: "Sofa",
//         slug: "Mid-Century-Modern-Sofa"
//       },
//       {
//         title: "Rose Garden Canvas Print",
//         description: "Transform your walls with this beautiful rose garden canvas print. The vibrant colors and lifelike details bring nature indoors.",
//         content: "The gallery-wrapped canvas and ready-to-hang design make it easy to add a touch of artistry to your home.",
//         imageUrl: "https://via.placeholder.com/600x400",
//         category: "flower",
//         subcategory: "Canvas Print",
//         slug: "Rose-Garden-Canvas-Print"
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

// Call the function to generate and insert sample data
// generateAndInsertSampleData();


