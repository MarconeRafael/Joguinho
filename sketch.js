 let perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
    respostaCorreta: 2
  },
     {
    pergunta: "Qual é a capital do Canadá?",
    opcoes: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
    respostaCorreta: 2
     },
  {
    pergunta: "Qual é o maior país da\n América do Sul?",
    opcoes: ["Peru", "Argentina", "Colômbia", "Brasil"],
    respostaCorreta: 3
  },
  {
    pergunta: "Qual é o maior rio do mundo?",
    opcoes: ["Amazonas", "Nilo", "Yangtzé", "Mississippi"],
    respostaCorreta: 1
  },
  {
    pergunta: "Qual é o país com a maior\n população do mundo?",
    opcoes: ["China", "Índia", "Estados Unidos", "Brasil"],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é o continente com a\n maior extensão territorial?",
    opcoes: ["África", "América do Sul", "Ásia", "Europa"],
    respostaCorreta: 2
  },
  {
    pergunta: "Qual é a montanha mais\n alta do mundo?",
    opcoes: ["Everest", "K2", "Monte Branco", "Makalu"],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual é o país com a maior área\n territorial do mundo?",
    opcoes: ["China", "Canadá", "Estados Unidos","Rússia" ],
    respostaCorreta: 3
  },
  {
    pergunta: "Qual é o oceano mais extenso?",
    opcoes: ["Atlântico", "Pacífico", "Índico", "Ártico"],
    respostaCorreta: 1
  },
  {
    pergunta: "Qual é a capital da Argentina?",
    opcoes: ["Caracas", "Montevidéu", "Lima", "Buenos Aires"],
    respostaCorreta: 3
  },
  {
    pergunta: "Qual é o país com o \nmaior número de ilhas?",
    opcoes: ["Indonésia", "Filipinas", "Malásia", "Japão"],
    respostaCorreta: 0
  }
];


let perguntaAtual;
let opcaoSelecionada;
let acertos;

let mensagem;
let percentualAcertos;

var xbutton, ybutton , xbutton2, ybutton2, xbutton3, ybutton3, xbutton4, ybutton4 , largurabutton, alturabutton, xbutton5;
var x1, y4 ;


var xbuttonTutorial, ybuttonTutorial, largurabuttonTutorial, alturabuttonTutorial ;
var x1Tutorial, y4Tutorial;

function preload() {
  img1 = loadImage('tela.png');
  img2 = loadImage('tela2.jpg');
  img3 = loadImage('tela3.png');
  img4 = loadImage('tela4.png');
  img5 = loadImage('tela5.png');
  img6 = loadImage('tela6.png');
  img7 = loadImage('tela7.png');

}

function setup() {
  createCanvas(500, 400);
  mode = 0;
}

function draw() {
  clear();

  if (mode === 0) {
    drawMainMenu();
  } else if (mode === 1) {
    drawGame();
  } else if (mode === 2) {
    drawTutorial();
  } else if (mode === 3) {
    drawCredits();
  }
  else if(mode == 4){
    drawfim();
  }
}

function drawMainMenu() {
  clear();

  perguntaAtual = 0;
  opcaoSelecionada = -1;
  acertos = 0;

  mensagem = "";
  percentualAcertos = 0;
  xbutton = 150;
  ybutton = 90;
  xbutton2 = 150;
  ybutton2 = 150;
  xbutton3 = 150;
  ybutton3 = 210;
  xbutton4 = 150;
  ybutton4 = 50;
  largurabutton = 180;
  alturabutton = 50;
  x1 = 300;
  y4 = 200;
  xbuttonTutorial = 150;
  ybuttonTutorial = 90;
  largurabuttonTutorial = 180;
  alturabuttonTutorial = 50;
  x1Tutorial = 300;
  y4Tutorial = 200;
  
  background(0, 250, 0);
  image(img1, 300, 200, 600, 400);
  imageMode(CENTER);
  // Play game button
  fill("#3FC019");
  rect(150, ybutton, largurabutton, alturabutton, 20);
  
  if (mouseX > 150 && mouseX < 150 + largurabutton && mouseY > ybutton && mouseY < ybutton + alturabutton) {
    fill("#198CC0");
    rect(150, ybutton, largurabutton, alturabutton, 20);
    if (mouseIsPressed) {
      mode = 1;
    }
  }
  textSize(30);
  fill("#D6F70F");
  text("  Play", 150, 125);

  // Tutorial button
  fill("#3FC019");
  rect(xbutton2, ybutton2, largurabutton, alturabutton, 20);
  if (mouseX > xbutton2 && mouseX < xbutton2 + largurabutton && mouseY > ybutton2 && mouseY < ybutton2 + alturabutton) {
    fill("#198CC0");
    rect(xbutton2, ybutton2, largurabutton, alturabutton, 20);
    if (mouseIsPressed) {
      mode = 2;
    }
  }
  textSize(30);
  fill("#D6F70F");
  text("  Tutorial", xbutton2, 185);

  // Créditos button
  fill("#3FC019");
  rect(xbutton3, ybutton3, largurabutton, alturabutton, 20);
  if (mouseX > xbutton3 && mouseX < xbutton3 + largurabutton && mouseY > ybutton3 && mouseY < ybutton3 + alturabutton) {
    fill("#198CC0");
    rect(xbutton3, ybutton3, largurabutton, alturabutton, 20);
    if (mouseIsPressed) {
      mode = 3;
    }
  }
  textSize(30);
  fill("#D6F70F");
  text("  Créditos", xbutton3, 245);
}

function drawGame() {
    image(img7, 300, 200, 600, 400);

  if (perguntaAtual < perguntas.length) {
    // Exibe a pergunta atual
    textAlign(CENTER, CENTER);
    textSize(25);
    fill('#3FC019');
    rect((width / 2)-180,  (height / 2) - 110, 360, 80, 20);
    fill('#D6F70F');
    text(perguntas[perguntaAtual].pergunta, width / 2, (height / 2) - 80);

    // Exibe as opções de resposta
    textAlign(CENTER, CENTER);
    textSize(16);
    for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
      let x = width / 2;
      let y = height / 2 + i * 50;
      let w = 200;
      let h = 40;

      // Define a cor do botão com base na seleção
      if (i === opcaoSelecionada) {
        fill(0, 255, 0); // Botão selecionado
      } else {
        fill(255); // Botões não selecionados
      }

      // Desenha o retângulo do botão
      fill('#3FC019');
      rect(x - w / 2, y - h / 2, w, h, 20);

      // Define a cor do texto do botão
      fill('#D6F70F');

      // Exibe o texto do botão
      text(perguntas[perguntaAtual].opcoes[i], x, y);
    }
  } else {
     mode =4;
}
}
function drawTutorial() {
  image(img3, x1Tutorial, y4Tutorial, 600, 440);
  textSize(30);
  fill("#FFFFFF");
  text("Acerte o maior número de\n perguntas que puder!", 20, 200);

  fill("#3FC019");
  rect(xbutton4, ybutton4, largurabutton, alturabutton, 20); // Atualizado para xbutton4 e ybutton4
  if (
    mouseX > xbutton4 &&
    mouseX < xbutton4 + largurabutton &&
    mouseY > ybutton4 &&
    mouseY < ybutton4 + alturabutton
  ) {
    fill("#198CC0");
    rect(xbutton4, ybutton4, largurabutton, alturabutton, 20);
    if (mouseIsPressed) {
      mode = 0;
    }
  }
  textSize(30);
  fill("#D6F70F");
  text("MENU", xbutton4, 85);
}


function drawCredits() {
  image(img4, x1, y4, 1800, 800);
  textSize(30);


  fill("#3FC019");
  rect(xbutton4, ybutton4, largurabutton, alturabutton, 20);
  if (
    mouseX > xbutton4 &&
    mouseX < xbutton4 + largurabutton &&
    mouseY > ybutton4 &&
    mouseY < ybutton4 + alturabutton
  ) {
    fill("#198CC0");
    rect(xbutton4, ybutton4, largurabutton, alturabutton, 20);
    if (mouseIsPressed) {
      mode = 0;
    }
  }
  textSize(30);
  fill("#D6F70F");
  text("MENU", xbutton4, 85);
}



function mouseClicked() {
  if (mode === 1) {
    let x = width / 2;
    let y = height / 2;

    for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
      if (mouseX > x - 100 && mouseX < x + 100 && mouseY > y + i * 50 - 20 && mouseY < y + i * 50 + 20) {
        opcaoSelecionada = i;
      }
    }

    if (opcaoSelecionada !== -1) {
      checkAnswer();
    }
  }
}

function checkAnswer() {
  if (opcaoSelecionada === perguntas[perguntaAtual].respostaCorreta) {
    acertos++;
  }

  perguntaAtual++;
  opcaoSelecionada = -1;
}
function drawfim(){
  

  

  
      // Fim do quiz
    percentualAcertos = (acertos / perguntas.length) * 100;

    if (percentualAcertos >= 60) {

      background(0, 250, 0);
      image(img6, 300, 200, 600, 400);
      imageMode(CENTER);
              if (
            mouseX > xbutton4 &&
            mouseX < xbutton4 + largurabutton &&
            mouseY > ybutton4 &&
            mouseY < ybutton4 + alturabutton
  ) {

                if (mouseIsPressed) {
                     setup();
                }
            }
      fill("#3FC019A3");
      rect(xbutton4, ybutton4, largurabutton, alturabutton, 20);
      textSize(30);
      fill("#D6F70F");
      text("Menu", xbutton5, 85);
      textSize(35);
      fill("#3FC019");
      rect(xbutton-30, ybutton+40, (largurabutton*2)-120, alturabutton, 20);
      fill('#0A15A2')
      text("Você venceu!", xbutton+90, ybutton+60);
      fill("#3FC019");
      rect(xbutton-30, ybutton+100, (largurabutton*2)-80, alturabutton, 20);
      textSize(20);
      fill('#D6F70F')
      text("Percentual de acerto: " + percentualAcertos.toFixed(2) + "%", xbutton+110, ybutton+120);
      
      
    } 
  
  
  
  
  
  
  else {
        background(0, 250, 0);
        image(img5, 300, 200, 600, 400);
        imageMode(CENTER);
        if (
            mouseX > xbutton4 &&
            mouseX < xbutton4 + largurabutton &&
            mouseY > ybutton4 &&
            mouseY < ybutton4 + alturabutton
  ) {
            fill("#198CC0");
            rect(xbutton4, ybutton4, largurabutton, alturabutton, 20);
                if (mouseIsPressed) {
                     setup();
                }
            }
            fill("#3FC019");
            rect(xbutton4, ybutton4, largurabutton, alturabutton, 20);
            textSize(30);
            fill("#D6F70F");
            text("Menu", xbutton4+60, 80);
            textSize(16);
            fill("#3FC019");
            rect((width/2)-120, (height/2)-20, (largurabutton*2)-120, alturabutton, 20);
            textSize(26);
            fill('#0A15A2')//-120 -50
            text("Game over!", width/2, height/2);
            fill('#D6F70F')
            text("Percentual de acerto: " + percentualAcertos.toFixed(2) + "%", xbutton+100, ybutton+280);
      
      
    
  }

  
}
