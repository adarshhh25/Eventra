import User from "../schema/user.js";
const userRegister = async(req, res) => {
    try {
        const {firstname, lastname, email, phone, gender, password, confirmPassword} = req.body;

        if(!firstname || !email || !phone || !gender) {
            return res.status(400).json({Message: "Some Field is Missing"});
        }

        if(await User.findOne({email})) {
           return res.status(409).json({Message: "User Already Exists. Try with another Email"});
        }
  
        if(password !== confirmPassword) {
            return res.status(400).json({Message: "Your password & confirm-password did not match"});
        }
   
        const newUser = await User.create({firstname, lastname, email, phone, gender, password});

        return res.status(200).json({Message: "User created Successfully", user: newUser});
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export { userRegister };
