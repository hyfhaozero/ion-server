import express, { Request, Response, Router } from 'express'
import { md5 } from '../utils/crypto.ts'
export const getToken: (uuid: string) => string = (uuid) => {
  return md5(uuid + Date.now().toString());
};

/* export {
  getToken,
}
*/

const tokenRouter: Router = express.Router()

tokenRouter.get('/getToken', function(req: Request, res: Response) {
  const uuid = req.query.uuid as string;

  if (!uuid) {
    return res.status(400).send('Missing uuid parameter');
  }

  const token = getToken(uuid);
  res.send(token);
});

export default tokenRouter
