// express
const express = require("express");
const app = express();

// para que tome la carpeta public, no se necesita poner la ruta completa sino siguiente de public
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

// para que la pagina no tire el cant get /
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/cart", (req, res) => {
  res.sendFile(__dirname + "/views/cart.html");
});

app.get("/help", (req, res) => {
  res.sendFile(__dirname + "/views/help.html");
});

app.get("/oficialStores", (req, res) => {
  res.sendFile(__dirname + "/views/oficialStores.html");
});

app.get("/sell", (req, res) => {
  res.sendFile(__dirname + "/views/sell.html");
});

// para que ande el post
app.post("/", (req, res) => {
  // para que mande directamente a la pagina principal dejar solo este
  res.sendFile(__dirname + "/views/index.html");
});

// para abrir el listen en el puerto determinado
app.listen(PORT, () => {
  console.log(` Servidor funcionando en el puerto ${PORT} `);
});
