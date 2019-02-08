module.exports = function(application){
    application.get('/formulario_inclusao_turma', function(req, res){
        application.app.controllers.admin.formulario_inclusao_turma(application, req, res);
    });
    application.post('/turmas/salvar', function(req, res){
        application.app.controllers.admin.turmas_salvar(application, req, res);
    });
}
