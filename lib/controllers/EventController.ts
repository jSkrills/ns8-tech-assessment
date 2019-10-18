import * as mongoose from "mongoose";
import EventSchema from "../models/Event";
import { Request, Response } from "express";

const Event = mongoose.model("Event", EventSchema);

export default class EventController {
  public addEvent(req: Request, res: Response) {
    let newEvent = new Event({
      type: req.body.type,
      created: Date.now(),
      _user: req.body.userId
    });

    newEvent.save((err, event) => {
      if (err) {
        res.send(err);
      }
      res.json(event);
    });
  }

  public getEvents(req: Request, res: Response) {
    const yesterday = req.body.lastDay;

    if (yesterday) {
      const start = new Date(yesterday);
      const end = new Date(yesterday);

      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);

      Event.find({ created: { $gte: start, $lt: end } }, (err, event) => {
        if (err) {
          res.send(err);
        }
        res.json(event);
      });
    } else {
      Event.find({}, (err, event) => {
        if (err) {
          res.send(err);
        }
        res.json(event);
      });
    }
  }

  public getEventsByUser(req: Request, res: Response) {
    Event.find({ _user: req.params.userId }, (err, event) => {
      if (err) {
        res.send(err);
      }
      res.json(event);
    });
  }
}
