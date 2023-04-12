const express = require("express");
const app = express();
app.use(express.json());
const bd = require("./alunos");

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1> <p>O que faremos hoje? </p>");
});

//Parte 1
app.get("/alunos", (req, res) => {
  let = { nome, media } = req.query;
  if (nome) {
    res.json({ message: bd.acharNome(nome) });
  } else if (media) {
    res.json({ message: bd.filtrarMedia(media) });
  } else res.json({ message: bd.alunos });
});

//Parte 2
app.post("/alunos/novo", (req, res) => {
  const { nome, matricula, media } = req.body;
  if (nome !== undefined && matricula !== undefined && media !== undefined) {
    res.json({ nome, matricula, media });
  } else {
    res.status(400).json({ message: "Dados inválidos para matricular" });
  }
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
