//variáveis da bolinha
let xBola = 300;
let yBola = 200;
let dBola = 22
let velXbola = 8
let velYbola = 4
let raioBola = dBola / 2;
//variáveis da raquete1
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;
let colisao = false
//variáveis da raquete 2
let xRaquete2 = 585
let yRaquete2 = 150
let wRaquete2 = 10;
let hRaquete2 = 90;
let velYraquete2
//placar do jogo
let placar1 = 0
let placar2 = 0
//sons do jogo
let raquetada;
let pontos;
let trilha;
//function dos sons
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}
function setup() {
  createCanvas(600, 400);
  trilha.loop()
}
function draw() {
  background(0);
  Bola();
  movimentoEcolisapBola();
  raquete1();
  movimentoRaquete1();
  colisaoRaquete1 ();
  raquete2();
  movimentoRaquete2();
  colisaoRaquete2();
  placarJogo();
}
//functions da bola
function Bola(){
  circle(xBola, yBola, dBola);
}
function movimentoEcolisapBola(){
   xBola += velXbola
  yBola += velYbola
   if (xBola + raioBola > width || xBola - raioBola < 0){
    velXbola *= -1;
     }
  if (yBola + raioBola > height || yBola - raioBola < 0){
    velYbola *= -1
  }
}
//functions da raquete1
function raquete1(){
  rect(xRaquete, yRaquete, wRaquete, hRaquete);
}
function movimentoRaquete1(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 5
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 5
  }}
function colisaoRaquete1(){ colisao =
  collideRectCircle(xRaquete, yRaquete, wRaquete, hRaquete, xBola, yBola, raioBola);
 if (colisao){
   velXbola *= -1
   raquetada.play();
 }
}
//function da raquete 2
function raquete2(){
  rect(xRaquete2, yRaquete2, wRaquete2, hRaquete2);
}
function movimentoRaquete2(){
  velYraquete2 = yBola - yRaquete2 - wRaquete2 / 2 - 30
  yRaquete2 += velYraquete2
}
function colisaoRaquete2(){
  colisao =
  collideRectCircle(xRaquete2, yRaquete2, wRaquete2, hRaquete2, xBola, yBola, raioBola);
 if (colisao){
   velXbola *= -1
   raquetada.play();
 }
}
//placar do jogo
function placarJogo(){
  fill(255)
  textAlign(CENTER)
  textSize(16)
  text(placar1, 150, 26)
  text(placar2, 450, 26)
  if (xBola + raioBola > width){
    placar1 += 1
    ponto.play();
  }
  if (xBola - raioBola < 0){
    placar2 += 1
    ponto.play();
  }
}