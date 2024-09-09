const AuthModel = require("../Models/LoginAuthModel");

const Register = async (req, resp, next) => {
  try {
    const { userName, email, phone, password, userType } = req.body;

    const isEmail = await AuthModel.findOne({ email });

    if (isEmail) {
      return resp.status(500).json({
        message: "Email Already Exists",
      });
    }

    const createUser = await AuthModel.create({
      userName,
      email,
      phone,
      password,
      userType,
    });

    return resp.status(201).json({
      message: "Register Successfull",
      token: await createUser.generateToken(),
      userId: createUser._id.toString(),
      createUser,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const userLogin = async (req, resp, next) => {
  try {
    const { email, password, userType } = req.body;

    const loginUser = await AuthModel.findOne({ email });

    if (!loginUser) {
      return resp.status(500).json({ message: "Invalid Email" });
    }

    if (loginUser.userType !== userType) {
      return resp.status(500).json({ message: "User type does not match" });
    }

    const user = await loginUser.ComparePassword(password);

    if (user) {
      resp.status(201).json({
        success: "Login Successful",
        token: await loginUser.generateToken(),
        userId: loginUser._id.toString(),
        loginUser,
      });
    } else {
      return resp.status(500).json({ message: "Wrong Password" });
    }
  } catch (error) {
    next(error);
  }
};

const UserProfile = async (req, resp, next) => {
  try {
    const currentUser = await AuthModel.findOne(req.UserID);

    return resp.status(201).json({ Success: true, currentUser });
  } catch (error) {
    next(error);
  }
};

const AllRegistereduser = async (req, resp, next) => {
  try {
    const AllUsers = await AuthModel.find();

    return resp.status(201).json({ Success: true, AllUsers });
  } catch (error) {
    next(error);
  }
};

const RegisterUserSingleData = async (req, resp, next) => {
  try {
    const SingleData = await AuthModel.findOne({ _id: req.params.id });

    return resp.status(201).json({
      message: "Success",
      SingleData,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  Register,
  userLogin,
  UserProfile,
  AllRegistereduser,
  RegisterUserSingleData,
};
