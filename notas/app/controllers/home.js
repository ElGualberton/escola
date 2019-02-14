module.exports.index = function(application, req, res){
    var connection = application.notas.config.dbConnection();
    var turmaModel = new application.notas.app.models.TurmasDAO(connection);
    turmaModel.get5Ultimasturmas(function(error, result){
        res.render("home/index", {turmas : result});
    });

}