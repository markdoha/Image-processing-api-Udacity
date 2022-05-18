"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ut_1 = require("./utilities/ut");
var ut_2 = require("./utilities/ut");
var routes = express_1.default.Router();
routes.get("/api/images", ut_1.resize, ut_2.send, function (req, res) {
    res.status(200);
});
exports.default = routes;
