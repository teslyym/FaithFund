import mongoose from "mongoose";

const mosquescehma = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    imamId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    accountNumber:{
            type:String,
            required: true,
        },
    accountName:
        {
            type:String,
            required: true,
        },
        bankName:
        {
            type:String,
            required: true,
        },
    
    currentState: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Mosques = mongoose.model("Mosques", mosquescehma);

export default Mosques;
