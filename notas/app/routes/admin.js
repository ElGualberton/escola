module.exports = function(application){
    application.get('/principal', function(req, res){
        application.notas.app.controllers.admin.principal(application, req, res);
    });
    application.get('/login', function(req, res){
        application.notas.app.controllers.admin.login(application, req, res);
    });
    application.get('/logar', function(req, res){
        application.notas.app.controllers.admin.logar(application, req, res);
    });
}
