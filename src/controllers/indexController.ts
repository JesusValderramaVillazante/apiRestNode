import {Request, Response} from 'express';

class IndexController {
    public index(req: Request, res: Response): void {
        res.json({text: 'probando json'});
    }
}

export const indexController = new IndexController();