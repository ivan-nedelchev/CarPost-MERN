import { Schema, Types, model } from "mongoose";
const { ObjectId } = Types;
const carSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
  },
  owner: {
    type: ObjectId,
    ref: "User",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
const Car = model("Car", carSchema);
export default Car;
