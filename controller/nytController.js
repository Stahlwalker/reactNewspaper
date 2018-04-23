const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {

    //const params = {}
  ///api key and axios... 
  //axios.get ....... 
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  }
 

};
