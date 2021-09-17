const express = require("express");
const calculo = require("./calculo.js");
const app = express();
const port = 3000;

//Realiza peticiones de tipo get en la ruta localhost:3000/pi/
app.get("/pi/", (req, res) => {
  if (req.query.random_limit) {
    //Devuelve la respuesta a la solicitud.
    res.send(calculo.calculo_pi(req.query.random_limit));
  } else {
    //responde con un error 404 Page Not Found.
    res.sendStatus(404);
  }
});

//Inicia el servidor que escucha las peticiones en el puerto 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log(calculo);
