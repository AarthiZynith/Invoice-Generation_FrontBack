import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
//import reportRoutes from "./routes/reportRoutes.js";
import billingRoutes from "./routes/billingRoutes.js";
import transactionRoutes from "./routes/transactions.js"; // Fixed import name
import Company from "./models/Company.js";
// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// // Connect to MongoDB Atlas
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.log("❌ MongoDB connection error:", err));



  // Add this function right after your database connection
async function setupInitialCompany() {
  try {
    const company = await Company.findByIdAndUpdate(
      '68ef50ef28068c749ba9d1a5',
      {
        name: "Zynith-IT Solutions",
        address: "123 Business Street, City, ST 12345",
        email: "admin@zynith-it.com", 
        phone: "000-000-0000",
        gst: "GSTIN123456789",
      //  logo: "C:/Users/Aarthi/Documents/logo.jpg" // Add your logo path here
      },
      { 
        new: true, 
        upsert: true // Creates the document if it doesn't exist
      }
    );
    console.log("Company setup completed:", company.name);
  } catch (error) {
    console.error("Error setting up company:", error);
  }
}



// Call this function after database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    setupInitialCompany(); // Add this line
  })
  .catch(err => console.error("MongoDB connection error:", err));
// Routes
//app.use("/api/reports", reportRoutes);
app.use("/api/billing", billingRoutes);
app.use('/api/transactions', transactionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
