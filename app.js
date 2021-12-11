const express = require("express");
const app = express();
const path = require("path");

//Configurar cabeceras para CORS

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Allow", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.get("/", (req, res) => {
  /* res.send("Hello world!"); */
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api/juguetes/", (req, res) => {
  console.log("Llegaste bien jaja");
  res.sendFile(path.join(__dirname + "/juguetes.json"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor running on port: ", process.env.PORT || 3000);
});
