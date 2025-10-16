import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  email: String,
  phone: String,
  gst: String,
  bankDetails: {
    bankName: String,
    accountName: String,
    accountNumber: String,
    ifsc: String,
    upiId: String,
  },
 // Add these new fields for logo and signature
  logo: {
    data: Buffer,        // Store image binary data
    contentType: String  // Store MIME type like 'image/png', 'image/jpeg'
  },
  signature: {
    data: Buffer,        // Store image binary data  
    contentType: String  // Store MIME type
  },
//   // Alternative: If you prefer file paths instead of storing images in database
//   logoPath: String,      // Path to logo file on server
//   signaturePath: String  // Path to signature file on server
// }, {
//   timestamps: true // Optional: adds createdAt and updatedAt fields

});

export default mongoose.model("Company", companySchema);
