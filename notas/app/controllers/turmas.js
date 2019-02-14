module.exports.turmas = function(application, req, res){
    var connection = application.notas.config.dbConnection() ; 
    var turmasModel = new application.notas.app.models.TurmasDAO(connection);
    turmasModel.getturmas(function(error,result){
        if(result){
            res.render("turmas/turmas", {turmas : result});
        } else {
            console.log("Codigo erro : " & error.code);
        }
    });
}

module.exports.turma = function(application, req, res){
    console.log('Controllers entrou');
    var connection = application.notas.config.dbConnection();
    console.log('Controllers Voltou do Dbconnection');
    var turmasModel = new application.notas.app.models.TurmasDAO(connection);
    console.log('Controllers Voltou do TurmaDAO');
    //var id_turma = req.query;
    var id_turma = 1; 
    console.log('id_turma: ' + id_turma);
    turmasModel.getturma(id_turma, function(error,result){
        if(result){
            res.render("turmas/turma", {turma : result, operacao : {}});
        } else { 
            console.log("Codigo erro : " + error.code); // Colocar um tratamento melhor para o erro (Boas Praticas)
        }
    });
}
