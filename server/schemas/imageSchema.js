const { Schema } = require('mongoose');
const core = require('../core');

const imagesSchema = new core.Schema({
  fullName: String,
  contentType: String,
  image: Buffer,
});

const imagesModel = core.mongoose.model('images', imagesSchema);

module.exports.imagesModel = imagesModel;
