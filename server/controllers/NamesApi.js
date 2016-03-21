var mongoose = require('mongoose');
var Name = mongoose.model('Name');

module.exports = {

  index: function(req, res){
    Name.find({}, function(err, name){
      res.json(name);
    })
  },

  create: function(req, res){
    var name = new Name({name: req.params.name});
    name.save(function(err){
      var errors = [];
      if(err){
        for(var x in err.errors){
          errors.push(err.errors[x].message);

        }
      res.redirect('/new/:name'); 
      }
      else{
        res.redirect('/');
      } 
    })
  },

  destroy: function(req, res){
    Name.remove({name: req.params.name}, function(err, name){
      res.redirect('/');
    })
  },

  show: function(req, res){
    Name.findOne({name: req.params.name}, function(err, name){

      if(name === null){
        res.json("name not found");
      }
      else{
        res.json(name);
      }
    })
  }


}