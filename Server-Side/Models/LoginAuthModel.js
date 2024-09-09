const mongoose = require("mongoose");
const bcyrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AuthSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
    enum: {
      values: ["Customer", "Electrician", "Admin"],
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

AuthSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcyrpt.genSalt(10);
    const hash_Password = await bcyrpt.hash(user.password, saltRound);
    user.password = hash_Password;
    //console.log("hash_Password");
  } catch (error) {
    next(error);
  }
});

AuthSchema.methods.ComparePassword = async function (password) {
  return bcyrpt.compare(password, this.password);
};

AuthSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        UserId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_TOKEN,
      {
        expiresIn: "1d",
      }
    );
  } catch (error) {
    next(error);
  }
};

const AuthModel = new mongoose.model("LoginUsers", AuthSchema);

module.exports = AuthModel;
