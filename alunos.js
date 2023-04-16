const fs = require("fs");
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

function adicionarAluno(nome, matricula, media, alunos) {
  if (nome !== undefined && matricula !== undefined && media !== undefined) {
    alunos.push({ nome: nome, matricula: matricula, media: media });
    var jsonData = JSON.stringify(alunos);
    fs.writeFileSync("db.json", jsonData);
    return { message: `Aluno adicionado com sucesso`, alunos };
  } else {
    return { message: "Dados inválidos para matricular" };
  }
}
function deletarAluno(index, alunos) {
  const alunoEncontrado = alunos[index];
  if (alunoEncontrado !== undefined) {
    alunos.splice(index, 1);
    var jsonData = JSON.stringify(alunos);
    fs.writeFileSync("db.json", jsonData);
    return { message: `Aluno excluído com sucesso`, alunos };
  } else {
    return { message: "Aluno não encontrado" };
  }
}

function atualizarAluno(index, dados, alunos) {
  const alunoEncontrado = alunos[index];
  if (alunoEncontrado !== undefined) {
    const { nome, media } = dados;
    if (nome !== undefined && media !== undefined) {
      alunoEncontrado.nome = nome;
      alunoEncontrado.media = media;
      var jsonData = JSON.stringify(alunos);
      fs.writeFileSync("db.json", jsonData);
      return { message: `Alterações feitas com sucesso`, alunos };
    } else {
      throw new Error(`Dados inválidos`);
    }
  } else {
    throw new Error(`Aluno não encontrado`);
  }
}

module.exports = {
  alunos,
  acharNome,
  filtrarMedia,
  adicionarAluno,
  deletarAluno,
  atualizarAluno,
};
