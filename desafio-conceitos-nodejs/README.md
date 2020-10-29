<img width="100%" alt="GoStack" src="../.github/gostack-banner.png">
<h3 align="center">
    Desafio 02: Conceitos do Node.JS
</h3>

<p align="center">
    <a href="#-sobre-o-desafio">Sobre o Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-rotas-do-backend">Rotas Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-middleware">Middleware</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/badge/Languages-1-%2304D361">

  <img alt="GitHub language count" src="https://img.shields.io/badge/made%20by-Carlos Eduardo-%2304D361">

  <img alt="Project license" src="https://img.shields.io/github/license/carlosmfreitas2409/nlw-03-happy?color=2304D361">
</p>

## 🚀 Sobre o Desafio

Nesse desafio, o objetivo foi desenvolver uma API para armazenar repositórios do meu portfólio, que permite a criação, listagem, atualização e remoção dos repositórios, além de permitir que os repositórios possam receber "likes".

Para isso, foi desenvolvido um back-end simples que recebe requisiçes HTTP através do http://localhost:3333/ e salva os dados em um array do próprio código.

## 💿 Instalação

Para executar este projeto, você deve possuir o Node e o Yarn instalado para configurar todas as dependências.

```
- Clone o repositório:
$ git clone https://github.com/carlosmfreitas2409/bootcamp-gostack-desafios

- Entre no diretório:
$ cd desafio-conceitos-nodejs

- Para instalar as dependências:
$ yarn

- Execute a aplicação:
$ yarn dev

- Open your browser in:
http://localhost:3333/
```


## 🍃 Rotas do Backend

Resource URI              | Método HTTP | Finalidade
------------------------- | ----------- | -------
/repositories             | GET         | Lista de repositórios
/repositories             | POST        | Cadastra um novo repositório
/repositories/{ID}        | PUT         | Altera um repositório
/repositories/{ID}        | DELETE      | Remove um repositórios 
/repositories/{ID}/like   | POST        | Adiciona "like" a um repositório

### Exemplo

Caso eu chame a rota `POST /repositories` repassando `{ title: 'Novo Repositório', url: 'https://meurepo.com.br', "techs": ["Node.JS", "ReactJS"] }`, meu ARRAY de projetos deve ficar da seguinte maneira:

```json
[
  {
    "id": "ID_DO_REPO",
    "title": "Novo Repositório",
    "url": "https://meurepo.com.br",
    "techs": ["Node.JS", "ReactJS"],
    "likes": 0
  }
]
```

## ⚙ Middleware

Neste projeto, também foi desenvolvido um Middleware para validar o ID projeto como UUID quando é feita alguma solicitação com parâmetro ID.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/carlosmfreitas2409/bootcamp-gostack-desafios/blob/master/LICENSE).

---

Feito com 💜 por Carlos Eduardo.