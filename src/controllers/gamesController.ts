import {Request, Response} from 'express';
import pool from '../databases';

class GamesController {
    public index(req: Request, res: Response): void {
        pool.query('DESCRIBE games');
        res.json('games');
    }
}

const gamesController = new GamesController();
export default gamesController;