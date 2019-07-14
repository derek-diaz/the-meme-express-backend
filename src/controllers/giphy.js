import giphyModel from '../models/giphy';

function getListOfFavorites(req, res, next) {
    giphyModel.find(req.body, function(err, favorites){
        let favList = [];
        if (err) {
            next(err);
        } else {
            for (let fav of favorites) {
                favList.push({id: fav._id, category: fav.category, giphy: fav.giphy_id});
            }
            res.json({status:"success", data:{favorites: favList }});
        }
    });
}

function updateById(req, res, next) {
    giphyModel.findByIdAndUpdate(req.params.id,{category:req.body.category}, function(err, giphy){
        (err) ? next(err) : res.json({status:"success", message: "Record Updated"});
    });
}

function deleteById(req, res, next) {
    giphyModel.findByIdAndRemove(req.params.id, function(err, giphy){
        (err) ? next(err) : res.json({status:"success", message: "Record Removed"});
    });
}

function create(req, res, next) {
    giphyModel.create({ user_id: req.body.user_id, category: req.body.category, giphy_id: req.body.giphy_id  }, function (err, result) {
        (err) ? next(err) : res.json({status: "success", message: "Record Added"});
    });
}

export default {create, updateById, deleteById, getListOfFavorites};
