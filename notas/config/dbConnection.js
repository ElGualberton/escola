var mysql = require('mysql');

var connMySQL = function(){
    return  mysql.createConnection({
        host : 'localhost',
        user : 'salvum104',
        password : 'arcoiris',
        database : 'portal_turmas'
    });
}

module.exports = function(){
    //console.log('autoload');
    return connMySQL;
};
