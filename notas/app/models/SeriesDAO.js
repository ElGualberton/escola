function SeriesDAO(connection){
    console.log('SerieDAO Conectando');
    this._connection = connection;
}
  
SeriesDAO.prototype.getSeries = function(callback){
    console.log('select * from TB_SERIE order by SER_ID');
    this._connection.query('select * from TB_SERIE order by SER_ID', callback);
}

SeriesDAO.prototype.getSerie = function(id_Serie, callback){
    console.log('id_SerieDAO: ' + id_Serie);
    console.log('select * from TB_SERIE where SER_ID = ' + id_Serie);
    this._connection.query('select * from TB_SERIE where SER_ID = ' + id_Serie , callback);
    console.log(callback);
}

SeriesDAO.prototype.salvarSerie = function(Serie, callback){
    console.log('Não devia ter entrado aqui ' + Serie);
    this._connection.query('insert into TB_SERIE set ?', Serie, callback);
}

SeriesDAO.prototype.deleteSerie = function(id_Serie, callback){
    this._connection.query('delete * from TB_SERIE where SER_ID = ' + id_Serie.SER_ID , callback);
}

SeriesDAO.prototype.updateSerie = function(Serie ,id_Serie, callback){
    this._connection.query('update TB_SERIE set ? where SER_ID = ' + id_Serie.id_Serie, Serie, callback);
}

SeriesDAO.prototype.get5UltimasSeries = function(callback){
    this._connection.query('select * from TB_SERIE order by SER_ID desc limit 5', callback);   
}

module.exports = function(){
    return SeriesDAO;
}