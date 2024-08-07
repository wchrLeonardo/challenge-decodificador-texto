# Decodificador de Texto
#### Projeto proposto no desafio da trilha Iniciante em programação da Alura em parceria com a Oracle

<div style="display:flex; gap:3%;">
  <img width="48%" src="./assets/imgs/imgs-git/decodficador-tema-claro.jpg">
  <img width="48%" src="./assets/imgs/imgs-git/decodficador-tema-escuro.jpg">
</div>

<br><br>

## Tecnologias utilizadas 🖥️
![My Skills](https://skillicons.dev/icons?i=html,css,js)

#### Para criar este projeto nos baseamos no conteúdo presente nas aulas dos cursos da Alura nos fornecido atráves do programa de trilhas Oracle One:

<div align="center">
<img width="60%" src="./assets/imgs/imgs-git/ONE_logo.png">
</div>

<hr>

> O aplicação se trata de um jogo de decodificação, onde o usuário digitará um texto de sua preferência e ao clicar no botão terá sua mensagem criptografada, em contrapartida poderá descriptografar a mensagem em seguida utilizando outro botão.
> O objetivo é treinar um pouco de lógica atráves do JavaScript

Para estrutura dos componentes presentes na aplicação, como esperado, utilizei a linguagem de marcação de hipertexto HTML5, presente em todas as aplicações Web atualmente.

Para saber mais acesse o link abaixo⤵️

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
</a>

<figure>
<img src="./assets/imgs/imgs-git/html.jpg">

#### Corpo da página usando um pouco de HTML Semântico.
</figure>

> Ao olhar o código percebe-se que todas as tags "botões" estão com o atributo ```'onclick=""```; e o mesmo é responsável por chamar a função que será executada ao 'clicar' no botão.

A fim de motorizar a aplicação todas as funções e partes que movimentam o código foram feitas utilizando a linguagem de programação JavaScript.

Para saber mais acesse o link abaixo⤵️

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
</a>

#### Conectando o HTML com o diretório e arquivo do código JS

<img src="./assets/imgs/imgs-git/link-js.png">


A primeira função visível na aplicação é a mais complexa, é um evento que é acionado assim que o documento é carregado, e adiciona ao título caracteres aleatórios que serão substituídos pelo texto original dando a impressão de descriptografia.

Tudo feito atráves de lógica e com uma pitada da biblioteca:  **animejs**

Para saber mais acesse o link abaixo⤵️

<a href="https://animejs.com/documentation/" target="_blank">

![JavaScript](https://img.shields.io/badge/animejs-%23323330.svg?style=for-the-badge&logo=animejs&logoColor=%23F7DF1E)
</a>

#### Conectando o Cabeçalho do nosso HTML com a lib animejs

<img src="./assets/imgs/imgs-git/lib-animejs.png">

<br>
<img src="./assets/imgs/imgs-git/evento-efeito-titulo1.jpg">
<img src="./assets/imgs/imgs-git/evento-efeito-titulo2.jpg">

<br>

### Resultado
<video loop> 
<source src="./assets/imgs/imgs-git/efeito-titulo.mp4" type="video/mp4">
</source>
</video>