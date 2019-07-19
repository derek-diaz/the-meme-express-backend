/**
 * Giphy - Controller
 *
 * @file   giphy.js
 * @author Derek Diaz Correa
 * @since  7.17.2019
 */

import giphyModel from '../models/giphy';

/**
 * Get the list of favorite Giphys from the Database
 * @param req - Service Request
 * @param res - Service Response
 * @param next - Node Control Flow Callback
 */
function getListOfFavorites(req, res, next) {
    giphyModel.find(req.body, function (err, favorites) {
        let favList = [];
        if (err) {
            next(err);
        } else {
            //Create List of Favorites
            for (let fav of favorites) {
                favList.push({id: fav._id, category: fav.category, giphy: fav.giphy_id});
            }
            res.json({status: "success", data: {favorites: favList}});
        }
    });
}

/**
 * Update favorite Giphy category in the Database
 * @param req - Service Request
 * @param res - Service Response
 * @param next - Node Control Flow Callback
 */
function updateById(req, res, next) {
    giphyModel.findByIdAndUpdate(req.params.id, {category: req.body.category}, function (err, giphy) {
        (err) ? next(err) : res.json({status: "success", message: "Record Updated"});
    });
}

/**
 * Delete favorite Giphy from Database
 * @param req - Service Request
 * @param res - Service Response
 * @param next - Node Control Flow Callback
 */
function deleteById(req, res, next) {
    giphyModel.findByIdAndRemove(req.params.id, function (err, giphy) {
        (err) ? next(err) : res.json({status: "success", message: "Record Removed"});
    });
}

/**
 * Create new favorite Giphy and put it in the Database
 * @param req - Service Request
 * @param res - Service Response
 * @param next - Node Control Flow Callback
 */
function create(req, res, next) {
    giphyModel.create({
        user_id: req.body.user_id,
        category: req.body.category,
        giphy_id: req.body.giphy_id
    }, function (err, result) {
        (err) ? next(err) : res.json({status: "success", message: "Record Added"});
    });
}

export default {create, updateById, deleteById, getListOfFavorites};
