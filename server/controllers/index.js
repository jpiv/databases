var models = require('../models');
var bluebird = require('bluebird');
var _ = require("underscore");
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
    get: function (req, res) {
      console.log('Get message received');
      var results;
      db.connect(function(connection) {
         db.getMessages(connection, function(rows) {
           db.disconnect(connection);
           results = _.map(rows, function (row) {
            return {username: row.username, text: row.message};
           });
           console.log(results);
           res.status(200);
           res.json({results: results.reverse()});
           res.end();
         });
      });
    }, // a function which produces all the messages
    post: function (req, res) {
      db.connect(function(connection) {
         db.insertMessage(connection, req.body, function(result) {
           console.log('Message added');
           db.disconnect(connection);
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
         db.insertUser (connection, req.body.username, function(result) {
           console.log('User added');
           console.log(result);
           db.disconnect(connection);
           res.status(201).end();
         });
      });
    }
  }
};

