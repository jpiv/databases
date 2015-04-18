var models = require('../models');
var bluebird = require('bluebird');

var db = require('../db');

// module.exports = {
//   messages: {
//     get: function (req, res) {}, // a function which handles a get request for all messages
//     post: function (req, res) {console.log('here',req.body);} // a function which handles posting a message to the database
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {},
//     post: function (req, res) {}
//   }
// };


module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (req, res) {
      db.connect(function(connection) {
         db.insertMessages (connection, req.body, function(res) {
           console.log(res);
           db.disconnect();
           res.status(201).end();
         });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, res) {
      db.connect(function(connection) {
         db.insertUser (connection, req.body.username, function(res) {
           console.log(res);
           db.disconnect();
           res.status(201).end();
         });
      });
    }
  }
};

