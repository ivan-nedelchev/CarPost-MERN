import { Schema, Types, model } from "mongoose";
const { ObjectId } = Types;
const carSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  modification: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  power: {
    type: Number,
    required: true,
  },
  euroStandard: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    min: 0,
  },
  mileage: {
    type: Number,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
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
