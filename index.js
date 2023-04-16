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

//Adicionar
app.post("/alunos/novo", (req, res) => {
  const { nome, matricula, media } = req.body;
  try {
    const result = bd.adicionarAluno(nome, matricula, media, bd.alunos);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Deletar
// Utilizar DELETE
app.delete("/alunos/deletar/:index", (req, res) => {
  const index = Number(req.params.index);
  try {
    const result = bd.deletarAluno(index, bd.alunos);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Atualizar
// utilizar PUT
app.put("/alunos/atualizar/:index", (req, res) => {
  const index = Number(req.params.index);
  try {
    const result = bd.atualizarAluno(index, req.body, bd.alunos);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log(` http://localhost:3000`);
});
