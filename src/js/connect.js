const mysql = require('mysql');

const mydb = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Nekw/)-388h',
	database: 'mydb'
});

module.exports = mydb;
