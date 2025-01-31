"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
var express_1 = require("express");
var crypto_ts_1 = require("../utils/crypto.ts");
var getToken = function (uuid) {
    return (0, crypto_ts_1.md5)(uuid + Date.now().toString());
};
exports.getToken = getToken;
/* export {
  getToken,
}
*/
var tokenRouter = express_1.default.Router();
tokenRouter.get('/getToken', function (req, res) {
    var uuid = req.query.uuid;
    if (!uuid) {
        return res.status(400).send('Missing uuid parameter');
    }
    var token = (0, exports.getToken)(uuid);
    res.send(token);
});
exports.default = tokenRouter;
