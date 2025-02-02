import express, { Router } from "express";
import { md5 } from "../services/crypto";
export const getToken: (uuid: string) => string = (uuid) => {
  return md5(uuid + Date.now().toString());
};

/* export {
  getToken,
}
*/

const tokenRouter: Router = express.Router();

// app.get("/response", (_, res) => { res.json('ok') });

tokenRouter.get("/getToken", (req, res): void => {
  const uuid = req.query.uuid as string;

  if (!uuid) {
    res.status(400).send("Missing uuid parameter");
  } else {
    const token = getToken(uuid);
    res.send(token);
  }
});

export default tokenRouter;
