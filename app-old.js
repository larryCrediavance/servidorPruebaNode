
const http = require('http');


http.createServer( (request, res) => {

    console.log( request );
    //res.writeHead(404);//para mostrar el codigo del estatus en la solicitud 

    res.write(' hola mundo !');
    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto ', 8080 );