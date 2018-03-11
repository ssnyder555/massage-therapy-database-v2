const mongoose = require('mongoose');
let ENV;

try {
  ENV = require('../env');
} catch (ex) {
  ENV = process.env;
}
mongoose.connect(ENV.MONGODB_URI);

module.exports.Bone = require('./bone');
module.exports.Comment = require('./comment');
module.exports.Disorder = require('./disorder');
module.exports.Muscle = require('./muscle');
module.exports.Technique = require('./technique');