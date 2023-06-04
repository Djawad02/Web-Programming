const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let blogSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  courseDetails: {
    type: String
  },
  duration:{
    type: String
  },
  slug: {
    type: String
  }
}, {
    collection: 'posts'
  })

module.exports = mongoose.model('posts', blogSchema);