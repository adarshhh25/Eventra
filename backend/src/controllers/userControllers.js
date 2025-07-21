import User from "../schema/user.js";
import bcrypt from "bcrypt";

const userRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, gender, password, confirmPassword } = req.body;

    if (!firstName || !email || !phone || !gender || !password || !confirmPassword) {
      return res.status(400).json({ Message: "All fields are required" });
    }

    if (await User.findOne({ email })) {
      return res.status(409).json({ Message: "User already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ Message: "Passwords do not match" });
    }

    const newUser = new User({ firstName, lastName, email, phone, gender, password });
    await newUser.save();

    res.status(201).json({ Message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ Message: "Error registering user", error });
  }
};


const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if(!email || !password){
           return res.status(400).json({Message: "All fields are required"})
        }
    
        const user = await User.findOne({email});
        
        if(!user){
           return res.status(400).json({Message: "User not Found"})
        }

        const isModified = await bcrypt.compare(password, user.password);
        
        if(!isModified) {
           return res.status(401).json({Message: "Invalid Credentials"})
        }

        return res.status(200).json({Message: "Logged in Successfully"})

    } catch (error) {
        return res.status(500).json({ Message: "Failed to login into your Account", error });
    }
}

export { userRegister, userLogin };
