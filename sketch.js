// variaveis
var caixa;

function setup() {
  // configurações
  createCanvas(400, 400);

  caixa = createSprite(200,200,50,50)
  caixa.shapeColor = "red"
}

function draw() {
  background("black");
  drawSprites();
}