import { Router } from 'express';
import gamesController from '../controllers/gamesController';

export class GamesRoutes{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {        
        this.router.get('/', gamesController.index);
    }
}