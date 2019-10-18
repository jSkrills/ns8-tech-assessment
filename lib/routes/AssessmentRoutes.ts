import { Request, Response } from "express";
import EventController from "../controllers/EventController";
import UserController from "../controllers/UserController";

export class Routes {
  public eventController: EventController = new EventController();
  public userController: UserController = new UserController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "Home GET request successful!!"
      });
    });

    app
      .route("/event")
      .get(this.eventController.getEvents)
      .post(this.eventController.addEvent);

    app.route("/event/:userId").get(this.eventController.getEventsByUser);

    app.route("/user").post(this.userController.addUser);
  }
}
