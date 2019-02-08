module.exports.index = function(application, req, res){
    var connection = application.config.dbConnection();
    var turmaModel = new application.app.models.TurmasDAO(connection);
    turmaModel.get5Ultimasturmas(function(error, result){
        res.render("home/index", {turmas : result});
    });

}