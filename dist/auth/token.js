"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const express_1 = __importDefault(require("express"));
const crypto_1 = require("../services/crypto");
const getToken = (uuid) => {
    return (0, crypto_1.md5)(uuid + Date.now().toString());
};
exports.getToken = getToken;
/* export {
  getToken,
}
*/
const tokenRouter = express_1.default.Router();
// app.get("/response", (_, res) => { res.json('ok') });
tokenRouter.get('/getToken', (req, res) => {
    const uuid = req.query.uuid;
    if (!uuid) {
        res.status(400).send('Missing uuid parameter');
    }
    else {
        const token = (0, exports.getToken)(uuid);
        res.send(token);
    }
});
exports.default = tokenRouter;
