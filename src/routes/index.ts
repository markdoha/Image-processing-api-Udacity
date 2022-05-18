import express from "express";
import { resize } from "./utilities/ut";
import { send } from "./utilities/ut";



const routes = express.Router();



routes.get(
  "/api/images",
  resize,
  send,
  (req: express.Request, res: express.Response) => {
    res.status(200);
  }
);




export default routes;
