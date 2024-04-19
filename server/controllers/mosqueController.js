import User from "../Models/userModel.js";
import Mosques from "../Models/mosqueModel.js";
import generateToken from "../utils/generateToken.js";

const addMosque = async (req, res) => {
  const { name, address, image, description, currentState, accountNumber, accountName, bankName } =
    req.body;

  if (
    !name ||
    !address ||
    !image ||
    !description ||
    !currentState ||
    !accountNumber ||
    !accountName ||
    !bankName
  ) {
    return res.status(400).json({ message: "Please fill in all required fields" });
  }

  try {
    console.log(req.user)
    const imamId = req.user._id.toString()
    console.log(imamId);
    let user = await Mosques.findOne({imamId});
    
    if (user) {
    return res.status(400).send("Imam already has a mosque");
}

    const newMosque = new Mosques(
        { 
            name, 
            address, 
            image, 
            description, 
            currentState, 
            accountNumber, 
            accountName, 
            bankName,
            imamId
        }
    );
    await newMosque.save();
    res.status(200).send("Mosque added successfully");
  } catch (err) {
    res.status(401).send("i failed because:" + err);
  }
};

const getAllMosques = async (req, res) => {
  const mosques = await Mosques.find();
    console.log(mosques);
  res.status(200).send(mosques)
};

export { addMosque, getAllMosques };
