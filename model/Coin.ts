import mongoose from "mongoose";

const { Schema } = mongoose;

const coinSchema = new Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    year: {
      type: "string",
      required: true,
    },
    // photoURL: {
    //   type: "string",
    //   required: true,
    // },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.models.Coin || mongoose.model("Coin", coinSchema);
