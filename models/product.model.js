const mongoose = require("mongoose");

// Define the schema for Userdb
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: [true, "Number is required"],
      unique: true,
    },
    services: {
      type: [String],
      required: [true, "Services are required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  {
    timestamps: true,
  }
);

// Add unique index to email and phoneNumber
UserSchema.index({ email: 1, phoneNumber: 1 }, { unique: true });

// Export the model
const Userdb = mongoose.model("userdb", UserSchema);
module.exports = Userdb;
