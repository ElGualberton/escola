module.exports.turmas = function(application, req, res){
    var connection = application.config.dbConnection() ; 
    var turmasModel = new application.app.models.TurmasDAO(connection);
    turmasModel.getturmas(function(error,result){
        if(result){
            res.render("turmas/turmas", {turmas : result});
        } else {
            console.log("Codigo erro : " & error.code);
        }
    });
}

module.exports.turma = function(application, req, res){
    var connection = application.config.dbConnection();
    var turmasModel = new application.app.models.TurmasDAO(connection);
    var id_turma = req.query; 
    turmasModel.getturma(id_turma, function(error,result){
        if(result){
            res.render("turmas/turma", {turma : result, operacao : {}});
        } else {
            console.log("Codigo erro : " & error.code); // Colocar um tratamento melhor para o erro (Boas Praticas)
        }
    });
}
