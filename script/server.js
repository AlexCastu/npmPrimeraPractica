const http = require('http');
const hostname = '127.0.0.1';
const fs = require('fs');
const port = 3000;

const server = http.createServer((reques, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');

  const paginas = [
    'moduloFicheros/index.html',
    'moduloFicheros/sobreNosotros.html',
    'moduloFicheros/contacto.html',
  ];
  paginas.forEach((pagina) => {
    fs.readFile(pagina, 'utf8', (err, data) => {
      if (err) {
        console.log('Ha surgido errores');
        console.log(err);
        console.log(pagina);
        response.end();
      } else {
        response.end(data);
      }
    });
  });
  const css = 'css/styles.css';
  fs.readFile(css, (err, data) => {
    if (err) {
      console.log('Ha surgido errores');
      console.log(err);
      response.end();
    } else {
      response.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log('Servidor levantado perfectamente');
});
