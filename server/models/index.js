var db = require('../db');




// module.exports = {
//   messages: {
//     get: function () {}, // a function which produces all the messages
//     post: function (req, res) {
//       db.connect(function(connection) {
//          db.insertMessages (connection, req.body, function(res) {
//            console.log(res);
//            db.disconnect();
//            response.status(201).end();
//          });
//       });
//     } // a function which can be used to insert a message into the database
//   },

//   users: {
//     // Ditto as above.
//     get: function () {},
//     post: function (req, res) {
//       db.connect(function(connection) {
//          db.insertUser (connection, req.body.username, function(res) {
//            console.log(res);
//            db.disconnect();
//            response.status(201).end();
//          });
//       });
//     }
//   }
// };

