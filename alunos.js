const alunos = [
  { nome: "Alana", matricula: 134096, media: 5 },
  { nome: "Rodrigo", matricula: 674384, media: 9 },
  { nome: "Peach", matricula: 777888, media: 6.6 },
];

function acharNome(nomeRequisitado) {
  return alunos.filter((aluno) => aluno.nome === nomeRequisitado);
}

function filtrarMedia(mediaRequerida) {
  return alunos.filter((aluno) => aluno.media >= mediaRequerida);
}

module.exports = { alunos, acharNome, filtrarMedia };
