module.exports = function(application){
    application.get('/formulario_inclusao_turma', function(req, res){
        application.notas.app.controllers.admin.formulario_inclusao_turma(application, req, res);
    });
}
