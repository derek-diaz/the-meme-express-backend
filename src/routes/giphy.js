import express from 'express';
import giphyController from '../controllers/giphy';

const router = express.Router();

router.get('/', giphyController.getListOfFavorites);
router.post('/', giphyController.create);
router.put('/:id', giphyController.updateById);
router.delete('/:id', giphyController.deleteById);

module.exports = router;