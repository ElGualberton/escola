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
    var Series = {};
    var seriesModel = new application.notas.app.models.SeriesDAO(connection);
    seriesModel.getSeries(function(error,result){
        console.log("Result " + result);
        if(result){
            Series = result;
            // res.render("turmas/turma", {validacao : {}, turma : result});
        } else { 
            console.log("Codigo erro : " + error.code); // Colocar um tratamento melhor para o erro (Boas Praticas)
        }
    });
    console.log(Series);
    var turmasModel = new application.notas.app.models.TurmasDAO(connection);
    console.log('Controllers Voltou do TurmaDAO');
    var id_turma = req.query.id_turma;
    process.env.APP_CRUD = req.query.vvYpy;
    console.log(id_turma);
    console.log(process.env.APP_CRUD);
    turmasModel.getturma(id_turma, function(error,result){
        if(result){
            res.render("turmas/turma", {validacao : {}, turma : result, Series});
        } else { 
            console.log("Codigo erro : " + error.code); // Colocar um tratamento melhor para o erro (Boas Praticas)
        }
    });
}

module.exports.turma_salvar = function(application, req, res){
    var turma = req.body;
    console.log('Valor de turma ' + turma);
    req.assert('TUR_ANO','Ano é Obrigatorio').notEmpty();
    req.assert('TUR_SERIE','Série é Obrigatorio').notEmpty();
    req.assert('TUR_LETRA','Letra é Obrigatorio').notEmpty();
    // req.assert('resumo','Resumo entre 10 e 100 caracs').len(10, 100);
    //req.assert('data_turma','Data é Obrigatorio').notEmpty();
    //req.assert('data_turma','Data invalida').isISO8601();
    //req.assert('turma','turma é Obrigatorio').notEmpty();
    /*
    req.getValidationResult().then(function(){
        var err = result.array();
        console.log(err);
        // if (!result.isEmpty()){
            // res.render("admin/form_add_turma", {validacao : erros, turma : turma});
            // return;
        //}
    })
    */
    var erros = req.validationErrors();
    if(erros){
        res.render("turmas/turma", {validacao : erros, turma : turma, vvYpy : {}});
        return;
    }
    var connection = application.notas.config.dbConnection();
    var turmasModel = new application.notas.app.models.TurmasDAO(connection);
    if(turma.TUR_ID.Number.NaN()){
        turmasModel.salvarturma(turma, function(error, result){
            res.redirect('/turmas');
        });
    } else {
        turmasModel.updateturma(turma, turma.TUR_ID,function(error, result){
            res.redirect('/turmas');
        });
    }
} 