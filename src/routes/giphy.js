/**
 * Giphy - Router
 *
 * @file   giphy.js
 * @author Derek Diaz Correa
 * @since  7.17.2019
 */
import express from 'express';
import giphyController from '../controllers/giphy';

const giphyRouter = express.Router();

//Defining Giphy Router/Endpoints
giphyRouter.get('/', giphyController.getListOfFavorites);
giphyRouter.post('/', giphyController.create);
giphyRouter.put('/:id', giphyController.updateById);
giphyRouter.delete('/:id', giphyController.deleteById);

export default giphyRouter;