module.exports = function(application){
    application.get('/turmas', function(req, res){
        application.app.controllers.turmas.turmas(application, req, res)
    });

    application.get('/turma', function(req, res){
        application.app.controllers.turmas.turma(application, req, res)
    });
}; 
