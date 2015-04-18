var mysql = require('mysql');

// Create a database con and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.connect = function (callback) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'chat'
  });

  connection.connect(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected successfully to db!');
      callback(connection)
    }
  });

};


exports.disconnect = function (connection) {
  connection.end();
};

exports.getUser = function (connection, user, callback) {
  connection.query('SELECT * from users WHERE username = "'
   + user + '"', function (err, rows, fields) {
    if (err) console.log(err);
    else callback(rows);
  });
};

var checkIfUser = function (connection, user, callback) {
  exports.getUser(connection, user, function (rows) {
      callback(!(rows.length === 0));
  });
};

exports.insertUser = function (connection, user, callback) {
  var userObj = {
                  username: user
                };

  checkIfUser(connection, user, function (exists) {
    if(!exists) {
      connection.query('INSERT into users SET ?', userObj, function (err, result) {
        if (err) console.log(err);
        else callback(true);
      });
    } else {
      callback(false);
      console.log('User already exists');
    }
  });
};

exports.getMessages = function (connection, callback) {
  connection.query('SELECT * from messages', function (err, rows, fields) {
    if (err) console.log(err);
    else callback(rows);
  });
};

exports.insertMessage = function (connection, messageObj, callback) {

      exports.getUser(connection, messageObj.username, function(rows) {

        var newMessageObj = {
          user_id: rows[0].user_id,
          message: messageObj.message
        };

        connection.query('INSERT into messages SET ?', newMessageObj, function (err, result) {
          if (err) console.log(err);
          else callback(result);
        });

      })


};


// exports.connect(function(connection) {
//   exports.insertUser(connection, 'Fred', function(res) {
//     console.log(res)
//   });
// });


