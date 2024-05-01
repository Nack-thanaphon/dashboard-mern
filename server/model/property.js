import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  title: { type: String, requered: true },
  description: { type: String, requered: true },
  propertyType: { type: String, requered: true },
  location: { type: String, requered: true },
  price: { type: Number, requered: true },
  photo: { type: String, requered: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const PropertyModel = mongoose.model("Property", PropertySchema);

export default PropertyModel;
