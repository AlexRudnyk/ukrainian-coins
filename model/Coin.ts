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
    photoURL: {
      type: ["string"],
      required: true,
    },
    spec: {
      type: "string",
      required: true,
    },
    price: {
      type: "string",
      required: true,
      default: "negotiated",
    },
    description: {
      type: "string",
      required: true,
    },
    comments: [
      {
        name: {
          type: "string",
          required: false,
        },
        text: {
          type: "string",
          required: false,
        },
        date: {
          type: Date,
          required: false,
          default: Date.now,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.models.Coin || mongoose.model("Coin", coinSchema);
