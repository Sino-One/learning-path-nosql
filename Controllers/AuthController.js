const User = require("../Models/UserModel");

module.exports.Signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({
      $or: [{ email }, { name }],
    });
    if (existingUser) {
      return res.json({ message: "L'utilisateur existe déjà" });
    }
    const user = await User.create({ name, email, password });
    await user.save();
    res.json({ user });
    next();
  } catch (error) {
    res.status(400).json({ error });
  }
};
