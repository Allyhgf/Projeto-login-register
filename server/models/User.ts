import mongoose from 'mongoose'
import * as Email from 'mongoose-type-email';

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  username: String,
  email: Email,
  password: String,
  passwordCheck: String,
})

const UserModel =  mongoose.model("User", UserSchema);

export default UserModel;