"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databases_1 = __importDefault(require("../databases"));
class GamesController {
    index(req, res) {
        databases_1.default.query('DESCRIBE games');
        res.json('games');
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
