import { Router } from 'express';
import gamesController from '../controllers/gamesController';

export class GamesRoutes{
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {        
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }
}