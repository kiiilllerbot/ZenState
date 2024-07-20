import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  // Get data from params
  const { username, email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10)
  
  // Create a new user and save to DB
  console.log(hashedPassword);
};
export const login = (req, res) => {};
export const logout = (req, res) => {};