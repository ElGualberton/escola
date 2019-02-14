var app = require('./notas/config/server');

app.listen(3000, function(){
    console.log('subiu');
});

process.env.APP_CRUD = 'teste';

console.log('Valor Atualx ' + process.env.APP_CRUD);