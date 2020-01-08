
const mysql = require('mysql');

exports.base = (sql, data, callback) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '51334314',
        database: 'test'
    });

    connection.connect();

    connection.query(sql, data, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });

    connection.end();
};