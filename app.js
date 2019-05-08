var app = require('./config/server');



var server = app.listen(30,()=>{
    console.log('Servidor ON');
});


var io = require('socket.io').listen(server);

app.set('io',io);

io.on('connection', function(socket){
    console.log('Conexao Pronta');

    socket.on('disconnect',function(){
        console.log('Desconectado');
    });

    socket.on('msgParaServidor', function(data){
        io.emit('msgParaCliente',{apelido: data.apelido, mensagem: data.mensagem});
        

        if(parseInt(data.apelido_atualizado) == 0){
            io.emit('participantesParaCliente',{apelido: data.apelido});
            
        }

    });
    
});