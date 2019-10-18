import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  type: {
    type: String,
    required: true,
    validate: /\S+/
  },
  created: Date,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

export default EventSchema;
