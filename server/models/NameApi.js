var mongoose = require('mongoose');

var NameSchema = new mongoose.Schema({
  name: String
})

//validations 
NameSchema.path('name').required(true, "Name cannot be blank");

var Name = mongoose.model('Name', NameSchema)