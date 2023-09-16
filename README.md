# NLW-IA-FOUNDATION / ROCKEATSEAT

<h2>Sistema para criar resumos dos shorts de vídeos do youtube utilizando IA (Inteligência Artificial).</h2>

## Tecnologias utilizadas

![Badge Interpreter node.js](https://img.shields.io/badge/Interpreter-NODE.JS-brightgreen)
![Badge Server Vite](https://img.shields.io/badge/Server-Vite-purple)
![Badge Style CSS](https://img.shields.io/badge/Style-CSS-blue)
![Badge Front/BackEnd JavaScript](https://shields.io/badge/Front/BackEnd-JavaScript-yellow)
![Badge Marking HTML5](https://img.shields.io/badge/Marking-HTML5-orange)
![Badge IDE VSCode](https://img.shields.io/badge/IDE-VSCode-blue)

## Inteligência Artificial (IA) Utilizadas

- `Whisper` : Modelo da OpenAI de conhecimento automático de fala (ASR - Automatic speech recognition)
- `Bart` : Modelo para resumo de texto

## Versões de bibliotecas estaticas

- `ytdl-core` : "4.10.0" (responsável pelo download dos vídeos)

<h4>Esta versão 4.10.0 do ytdl-core não apresentou problema no download dos vídeos</h4>

## :hammer: Instalação do node.js e o vite.

<h3>Instalação do node para Windows 32 ou 64 bits:</h3>

Baixe o LTS clicando aqui: [node.js](https://nodejs.org/pt-br/download)

Para verificar se o node foi instalado com sucesso abra o cmd (prompt commando) do windows ou o terminal do vscode e execute o comando abaixo:

```
node -v
```

Agora vamos configurar o vite + vanilla. O comando abaixo vai criar uma pasta para o projeto.

```
npm create vite@latest
```

Após a execução do comando, informa o nome do projeto. Em seguida Escolha o Framework e a linguagem de programação como mostra abaixo:

Selecione o framework:

- Vanilla

Selecione a linguagem de programação:

- JavaScript

Para acessar a pasta do projeto que foi criada utilize o comando cd e o nome da pasta do projeto, exemplo:

```
cd nlwia
```

Agora vamos instalar os packages utilizando o comando no cmd ou terminal vscode:

```
npm install ou npm i
```

Concluindo as instalação vamos executar o front-end. O nome padrão do script para executar o front-end foi alterado para web. Entre na pasta do projeto e utilize o comando abaixo:

```
npm run web
```

Concluindo as instalação vamos executar o front-end. O nome padrão do script para executar o front-end foi alterado para web. Entre na pasta do projeto e utilize o comando abaixo:

```
npm run web
```
