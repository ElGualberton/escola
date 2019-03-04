module.exports.principal = function(application, req, res){
    res.render("admin/principal")
}

module.exports.login = function(application, req, res){
    res.render("admin/login",{validacao:{},usuario:{usuario : ''}})
}

module.exports.logar = function(application, req, res){
    var usuario = req.body;
    console.log('Valor de usuario ' + usuario);
    req.assert('USR_EMAIL','E-mail é Obrigatorio').notEmpty();
    req.assert('USR_SENHA','Senha é Obrigatorio').notEmpty();
    req.assert('TUR_LETRA','Letra é Obrigatorio').notEmpty();
    var erros = req.validationErrors();
    if(erros){
        res.render("admin/login", {validacao : erros, usuario : usuario});
        return;
    }
    var connection = application.notas.config.dbConnection();
    var usuariosModel = new application.notas.app.models.UsuariosDAO(connection);
    usuariosModel.loginUsuario(usuario.USR_EMAIL, function(error,result){
        if(result){
            console.log(result);
            if(result.USR_SENHA.trim() == usuario.USR_SENHA.trim()){
                process.env.USR_NIVEL = res.USR_NIVEL;
                process.env.USR_CLASSIFICACAO = res.USR_CLASSIFICACAO;
                process.env.USR_NOME = res.USR_NOME;
                res.render("admin/principal");
            } else {
                erros = 'Senha Invalida';
                res.render("admin/login", {validacao : erros, usuario : usuario});
                return;
            }
        } else { 
            res.write("Codigo erro : " + error.code);
            console.log("Codigo erro : " + error.code); // Colocar um tratamento melhor para o erro (Boas Praticas)
        }
    });
} 