function TurmasDAO(connection){
    this._connection = connection;
}

TurmasDAO.prototype.getturmas = function(callback){
    this._connection.query('select * from turmas order by data_criacao desc', callback);
}

TurmasDAO.prototype.getturma = function(id_turma, callback){
    this._connection.query('select * from turmas where id_turma = ' + id_turma.id_turma  , callback);
}

TurmasDAO.prototype.salvarturma = function(turma, callback){
    console.log(turma);
    this._connection.query('insert into turmas set ?', turma, callback);
}

TurmasDAO.prototype.deleteturma = function(id_turma, callback){
    this._connection.query('delete * from turmas where id_turma = ' + id_turma.id_turma  , callback);
}

TurmasDAO.prototype.updateturma = function(turma ,id_turma, callback){
    this._connection.query('update turmas set ? where id_turma = ' + id_turma.id_turma, turma, callback);
}

TurmasDAO.prototype.get5Ultimasturmas = function(callback){
    this._connection.query('select * from turmas order by data_criacao desc limit 5', callback);   
}

module.exports = function(){
    return TurmasDAO;
}