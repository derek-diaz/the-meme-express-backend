import giphyModel from '../models/giphy';

module.exports = {

    getListOfFavorites: function(req, res, next) {
        console.log(req.body);
        giphyModel.find(req.params.email, function(err, favorites){
            let favList = [];
            if (err) {
                next(err);
            } else {
            for (let fav of favorites) {
                favList.push({id: fav._id, category: fav.category, giphy: fav.giphy_id});
            }
            res.json({status:"success", message: "List Request successful", data:{favorites: favList }});
            }
        });
    },
    updateById: function(req, res, next) {
        giphyModel.findByIdAndUpdate(req.params.id,{category:req.body.category}, function(err, giphy){
            (err) ? next(err) : res.json({status:"success", message: "Record Updated", data:null});
        });
    },
   deleteById: function(req, res, next) {
        giphyModel.findByIdAndRemove(req.params.id, function(err, giphy){
            (err) ? next(err) : res.json({status:"success", message: "Record Removed", data:null}); 
        });
    },
   create: function(req, res, next) {
        giphyModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
            (err) ? next(err) : res.json({status: "success", message: "Record Added", data: null});
        });
    },
   }