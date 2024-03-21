import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide A Username"],
    unique: [true, "This Username Is Already Taken!"],
  },
  email: {
    type: String,
    required: [true, "Please Provide An Email"],
    unique: [true, "This Email Is Already Taken!"],
  },
  password: {
    type: String,
    required: [true, "Please Provide An password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model('users', userSchema)
export default User