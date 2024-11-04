const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },

    phoneNumber: {
      type: Number,
      required: [true, "Number is required"],
    },

    service: {
      type: String,
      required: [true, "Service is required"],
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

const Product = mongoose.model("Product",productSchema);
module.exports = Product;