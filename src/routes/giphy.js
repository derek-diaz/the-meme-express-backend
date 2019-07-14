import express from 'express';
import giphyController from '../controllers/giphy';

const giphyRouter = express.Router();

giphyRouter.get('/', giphyController.getListOfFavorites);
giphyRouter.post('/', giphyController.create);
giphyRouter.put('/:id', giphyController.updateById);
giphyRouter.delete('/:id', giphyController.deleteById);

export default giphyRouter;