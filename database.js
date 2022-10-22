var mysql = require('mysql');
var conn = mysql.createConnection({
    host : 'localhost:3307',
    user : 'root',
    password : 'aayushi1304',
    database : 'Microservice_project'
    
});
conn.connect(function(err) {
    /*if (err) throw err;*/
   console.log('Database is connected successfully !!');
});

module.exports = conn;
