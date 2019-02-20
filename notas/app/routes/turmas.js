module.exports = function(application){
    application.get('/turmas', function(req, res){
        application.notas.app.controllers.turmas.turmas(application, req, res)  
    });

    application.get('/turma', function(req, res){
        console.log('rotas');
        application.notas.app.controllers.turmas.turma(application, req, res)
    });
    application.post('/turma/salvar', function(req, res){
        application.notas.app.controllers.admin.turmas_salvar(application, req, res);
    });
}; 
