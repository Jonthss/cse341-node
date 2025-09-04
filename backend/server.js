// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

const professionalData = {
  "professionalName": "Maria Silva",
  "base64Image": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  "nameLink": {
    "firstName": "Maria",
    "url": "https://www.google.com"
  },
  "primaryDescription": "Desenvolvedora front-end apaixonada por criar interfaces de usuário intuitivas e acessíveis.",
  "workDescription1": "Trabalhei no desenvolvimento de um sistema de e-commerce usando React e Node.js.",
  "workDescription2": "Colaborei na migração de uma plataforma legada para uma arquitetura de microsserviços.",
  "linkTitleText": "Conecte-se comigo",
  "linkedInLink": {
    "text": "LinkedIn",
    "link": "https://www.linkedin.com/in/seu-perfil"
  },
  "githubLink": {
    "text": "GitHub",
    "link": "https://github.com/seu-perfil"
  }
};

app.use(cors());

app.get('/professional', (req, res) => {
  res.json(professionalData);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});