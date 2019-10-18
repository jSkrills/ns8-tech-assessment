import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

 const UserSchema = new Schema({
  email: {
    type: String,
    required: "Enter an email address",
    unique: true
  },
  password: {
    type: String,
    required: "Enter a password"
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
});

export default UserSchema