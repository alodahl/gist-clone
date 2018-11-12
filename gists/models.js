const mongoose = require('mongoose');

const gistSchema = mongoose.Schema({
  description: {type: String, default: "new gist"},
  filename: {type: String, default: ""},
  textarea: {type: String, default: ""},
  creationDate: {type: Date, default: new Date()},
  // user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

gistSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    description: this.description,
    filename: this.filename,
    creationDate: this.creationDate,
    textarea: this.textarea,
  };
}

const Gist = mongoose.model('gists', gistSchema);

module.exports = {Gist};
