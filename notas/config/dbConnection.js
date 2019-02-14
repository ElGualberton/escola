var mysql = require('mysql');

var connMySQL = function(){
    console.log('Dbconnection antes de conectar com o bd');
    return  mysql.createConnection({
        host : 'localhost',
        user : 'sistema',
        password : 'arcoiris',
        database : 'escola'
    });
}

module.exports = function(){
    console.log(connMySQL);
    return connMySQL;
};
