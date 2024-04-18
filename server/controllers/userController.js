import User from "../Models/userModel.js";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  const { firstname, lastname, phoneNumber, email, password, homeaddress } =
    req.body;

  if (
    !firstname ||
    !lastname ||
    !phoneNumber ||
    !email ||
    !password ||
    !homeaddress
  ) {
    res.status(400).json({ message: "Please fill in all required fields" });
    return;
  }

  try {
    let user = await User.findOne({ email: email });
    if (user) {
      res.status(400).send("User already exists");
      return;
    }

    const newUser = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phone: phoneNumber,
      address: homeaddress,
    });
    user = await newUser.save();
    res.status(200).send("User created successfully");
  } catch (err) {
    res.status(401).send("i failed because:" + err);
  }
};

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Please fill in all required fields" });
  }
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    res.status(400).send({ message: "User does not exist" });
  }
  const isMatch = await user.matchPassword(password);
  console.log(isMatch);
  if (!isMatch) {
    res.status(400).send({ message: "Invalid password" });
  }
  res.status(201).json({
    message: "User authenticated successfully",
    token: generateToken({
      id: user._id,
      email: user.email,
      firstname: user.firstname,
      lastName: user.lastName,
      created: user.createdAt,
      updated: user.updatedAt,
    }),
  });
};

export { registerUser, authenticateUser };
