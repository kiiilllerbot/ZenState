import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
  // Get data from params
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    
    // Create a new user and save to DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    })

    res.status(201).json({ message: "Account created successfully." })
  } catch(error){
    console.log("Error in creating Account: ", error);
    res.status(500).json({ message: "Failed to created Account." })
  }
};
export const login = (req, res) => {};
export const logout = (req, res) => {};