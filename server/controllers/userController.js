import User from '../Models/userModel.js';

const registerUser = async (req, res) => {
    const { firstname, lastname, phoneNumber, email, password, address } = req.body
    const newUser = new User(
        {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            phone: phoneNumber,
            address: address,

        })
        const user = await newUser.save()
        res.send(user)
    
    }
    export { registerUser}