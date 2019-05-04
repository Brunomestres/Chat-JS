module.exports.iniciaChat = function(app,req,res){
    var dados = req.body;
    

    req.assert('apelido','Campo Obrigatório!').notEmpty();
    req.assert('apelido','Quantidade de caracter inválida!').len(3,30);

    var erros = req.validationErrors();

    if(erros)
    {
        res.render('index',{validacao : erros});
        return;
    }

    app.get('io').emit('msgParaCliente',{apelido: dados.apelido , mensagem: ' acabou de entrar no chat!'});

    res.render('chat',{dados:dados});

}