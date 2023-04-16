const express = require("express");
const bd = require("./alunos");
const logger = require("morgan");
const morgan = require("morgan");

const app = express();

morgan.token("body", (req) => JSON.stringify(req.body));

app.use(express.json());
app.use(morgan(":url :method :body"));
app.use(logger("dev"));

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
app.post("/alunos/deletar/:index", (req, res) => {
  const index = Number(req.params.index);
  try {
    const result = bd.deletarAluno(index, bd.alunos);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Atualizar
app.post("/alunos/atualizar/:index", (req, res) => {
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
