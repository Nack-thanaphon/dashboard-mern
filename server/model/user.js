import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, requered: true },
  email: { type: String, requered: true },
  avatar: { type: String, requered: true },
  allProperties: { type: mongoose.Schema.Types.ObjectId, ref: "Property" }
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
