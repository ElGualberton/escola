function UsuariosDAO(connection){
    console.log('UsuariosDAO Conectando');
    this._connection = connection;
}
  
UsuariosDAO.prototype.getUsuarios = function(callback){
    console.log('select * from TB_USUARIO order by USR_ID');
    this._connection.query('select * from TB_USUARIO order by USR_ID', callback);
}

UsuariosDAO.prototype.getUsuario = function(id_Usuario, callback){
    console.log('id_UsuariosDAO: ' + id_Usuario);
    console.log('select * from TB_USUARIO where USR_ID = ' + id_Usuario);
    this._connection.query('select * from TB_USUARIO where USR_ID = ' + id_Usuario , callback);
    console.log(callback);
}

UsuariosDAO.prototype.loginUsuario = function(email_Usuario, callback){
    console.log('email_UsuariosDAO: ' + email_Usuario);
    console.log('select * from TB_USUARIO where USR_EMAIL = ' + email_Usuario);
    this._connection.query('select * from TB_USUARIO where USR_EMAIL = ' + email_Usuario , callback);
    console.log(callback);
}

UsuariosDAO.prototype.salvarUsuario = function(Usuario, callback){
    console.log('Não devia ter entrado aqui ' + Usuario);
    this._connection.query('insert into TB_USUARIO set ?', Usuario, callback);
}

UsuariosDAO.prototype.deleteUsuario = function(id_Usuario, callback){
    this._connection.query('delete * from TB_USUARIO where USR_ID = ' + id_Usuario.USR_ID , callback);
}

UsuariosDAO.prototype.updateUsuario = function(Usuario ,id_Usuario, callback){
    this._connection.query('update TB_USUARIO set ? where USR_ID = ' + id_Usuario.id_Usuario, Usuario, callback);
}

UsuariosDAO.prototype.get5UltimasUsuarios = function(callback){
    this._connection.query('select * from TB_USUARIO order by USR_ID desc limit 5', callback);   
}

module.exports = function(){
    return UsuariosDAO;
}