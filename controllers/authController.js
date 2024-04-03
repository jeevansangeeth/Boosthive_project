import { createJWT } from "../utils/tokenUtils.js";
import { UserData } from "../models/Userdata.js";
import { hashPassword, comparedPassword } from "../utils/passwordUtils.js";

export const Registration = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    //Check if user already exists in the database
    const user = await UserData.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "Email is already exists" });
    }
    //hashing the password
    const hashedPassword = await hashPassword(password);
    const newUser = await UserData.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
    //saving the new user to database
    const token = createJWT({
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role,
    });
    // console.log(token);
    res.status(200).json({ token, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Find user by email
    const user = await UserData.findOne({ email });
    console.log(user.role);
    if (!user) {
      return res.status(401).send({ message: "Invalid emailID" });
    }

    // Validate Password
    const validPassword = await comparedPassword(password, user.password);
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid password" });
    }
    // const validRole = await comparedPassword(role, user.role);
    // if (!validRole) {
    //   return res.status(401).send({ message: "Invalid role" });
    // }

    // Generate token with user data including the role
    const token = createJWT({
      email: user.email,
      password: user.password,
      role: user.role,
    });

    res
      .status(200)
      .send({ token, role: user.role, user, message: "Login Successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
