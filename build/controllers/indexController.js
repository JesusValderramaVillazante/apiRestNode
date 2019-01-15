"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'probando json' });
    }
}
exports.indexController = new IndexController();
