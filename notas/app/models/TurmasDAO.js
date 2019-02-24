function TurmasDAO(connection){
    console.log('TurmaDAO Conectando');
    this._connection = connection;
}
  
TurmasDAO.prototype.getturmas = function(callback){
    this._connection.query('select * from TB_TURMA order by TUR_ID', callback);
}

TurmasDAO.prototype.getturma = function(id_turma, callback){
    console.log('id_turmaDAO: ' + id_turma);
    console.log('select * from TB_TURMA where TUR_ID = ' + id_turma);
    this._connection.query('select * from TB_TURMA where TUR_ID = ' + id_turma , callback);
    console.log(callback);
}

TurmasDAO.prototype.salvarturma = function(turma, callback){
    console.log('Não devia ter entrado aqui ' + turma);
    this._connection.query('insert into TB_TURMA set ?', turma, callback);
}

TurmasDAO.prototype.deleteturma = function(id_turma, callback){
    this._connection.query('delete * from TB_TURMA where TUR_ID = ' + id_turma.TUR_ID , callback);
}

TurmasDAO.prototype.updateturma = function(turma ,id_turma, callback){
    this._connection.query('update TB_TURMA set ? where TUR_ID = ' + id_turma.id_turma, turma, callback);
}

TurmasDAO.prototype.get5Ultimasturmas = function(callback){
    this._connection.query('select * from TB_TURMA order by TUR_ID desc limit 5', callback);   
}

module.exports = function(){
    return TurmasDAO;
}