import User from "../schema/user.js";
const userRegister = async(req, res) => {
    try {
        const {firstName, lastName, email, phone, gender, password, confirmPassword} = req.body;

        if(!firstName || !email || !phone || !gender) {
            return res.status(400).json({Message: "Some Field is Missing"});
        }

        if(await User.findOne({email})) {
           return res.status(409).json({Message: "User Already Exists. Try with another Email"});
        }
  
        if(password !== confirmPassword) {
            return res.status(400).json({Message: "Your password & confirm-password did not match"});
        }
   
        const newUser = await User.create({firstName, lastName, email, phone, gender, password});

        return res.status(200).json({Message: "User created Successfully", user: newUser});
    } catch (error) {
        res.status(500).json({ Message: "Failed creating an Account", error });
    }
};

const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if(!email || !password){
           return res.status(400).json({Message: "All fields are required"})
        }
    
        const user = await User.findOne({email});

        if(!user || (user.password != password)){
           return res.status(400).json({Message: "Something went wrong"})
        }

        return res.status(200).json({Message: "Logged in Successfully"})

    } catch (error) {
        return res.status(500).json({ Message: "Failed to login into your Account", error });
    }
}

export { userRegister, userLogin };
