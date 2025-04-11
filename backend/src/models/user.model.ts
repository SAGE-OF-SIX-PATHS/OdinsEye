import mongoose from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt";

export interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v?: number; // Add this line to include version key
  comparePassword(val: string): Promise<boolean>;
  omitPassword(): Omit<
    UserDocument,
    "password" | "comparePassword" | "omitPassword"
  >;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
    versionKey: "__v" // Explicit version key configuration
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await hashValue(this.password);
  return next();
});

userSchema.methods.comparePassword = async function (val: string) {
  return compareValue(val, this.password);
};

userSchema.methods.omitPassword = function () {
  const user = this.toObject();
  delete user.password;
  delete user.comparePassword;
  delete user.omitPassword;
  return user;
};

const UserModel = mongoose.model<UserDocument>("User", userSchema);
export default UserModel;