module.exports.formulario_inclusao_turma = function(application, req, res){
    res.render("admin/form_add_turma",{validacao:{},turma:{turma : ''}})
}

module.exports.turmas_salvar = function(application, req, res){
    var turma = req.body;
    console.log('Valor de turma ' + turma);
    req.assert('titulo','Titulo é Obrigatorio').notEmpty();
    req.assert('resumo','Resumo é Obrigatorio').notEmpty();
    req.assert('resumo','Resumo entre 10 e 100 caracs').len(10, 100);
    req.assert('autor','Autor é Obrigatorio').notEmpty();
    req.assert('data_turma','Data é Obrigatorio').notEmpty();
    req.assert('data_turma','Data invalida').isISO8601();
    req.assert('turma','turma é Obrigatorio').notEmpty();
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
        res.render("admin/form_add_turma", {validacao : erros, turma : turma});
        return;
    }
    var connection = application.notas.config.dbConnection();
    var turmasModel = new application.notas.app.models.TurmasDAO(connection);
    turmasModel.salvarturma(turma, function(error, result){
        res.redirect('/turmas');
    });
} 