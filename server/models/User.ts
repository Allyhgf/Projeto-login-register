import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  username: String,
  email: String,
  password: String,
  passwordCheck: String,
})

const UserModel =  mongoose.model("User", UserSchema);

export default UserModel;