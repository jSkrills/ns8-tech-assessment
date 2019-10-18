import * as mongoose from "mongoose";
import UserSchema from "../models/User";
import { Request, Response } from "express";

const User = mongoose.model("User", UserSchema);

export default class UserController {
  public addUser(req: Request, res: Response) {
    const { email, password, phone } = req.body;
    let newUser = new User({
      email,
      password,
      phone
    });

    newUser.save((err, event) => {
      if (err) {
        res.send(err);
      }
      res.json(event);
    });
  }
}
