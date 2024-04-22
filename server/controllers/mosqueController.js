import User from "../Models/userModel.js";
import Mosques from "../Models/mosqueModel.js";
import generateToken from "../utils/generateToken.js";

const addMosque = async (req, res) => {
  console.log(req.body);
  const {
    name,
    address,
    image,
    description,
    currentState,
    accountNumber,
    accountName,
    bankName,
  } = req.body;

  if (
    !name ||
    !address ||
    !description ||
    !currentState ||
    !accountNumber ||
    !accountName ||
    !bankName
  ) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields" });
  }

  try {
    const newMosque = new Mosques({
      name,
      address,
      image,
      description,
      currentState,
      accountNumber,
      accountName,
      bankName,
    });
    await newMosque.save();
    res.status(200).send(newMosque);
  } catch (err) {
    res.status(401).send("i failed because:" + err);
  }
};

const getAllMosques = async (req, res) => {
  const mosques = await Mosques.find();
  console.log(mosques);
  res.status(200).send(mosques);
};

export { addMosque, getAllMosques };
