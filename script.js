
window.onLoad = function() {
    var canvas = document.getElementById("canvas");
    var ctx    = canvas.getContext("2d");
    ctx.fillStyle = 'white';
    ctx.font = '18px serif';

  var character1= {
  x: 25,
  y: 25,
  
  moveUp:   function () {this.y -= 25; },
  moveDown: function () {this.y += 25; },
  moveLeft: function () {this.x -= 25; },
  moveRight: function() {this.x += 25; },

  };
};

   function draw (character1)  {
       var Image = NewImage();
       img.onLoad = function() {
           ctx.drawImage (img, character1.x, character1.y, 50, 50);
       };
           img.src ="/Users/johnatan/Desktop/Dragonball-shooter-project1/images/12.png";
     
   }

   document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: if (character1.y === 0) {} else {character1.moveUp();} break;    
      case 40: if (character1.y === 900) {} else {character1.moveDown();} break;
      case 37: if (character1.x === 0) {} else {character1.moveLeft();} break;
      case 39: if (character1.x === 950) {} else {character1.moveRight();} break;
    }
    updateCanvas();
  };
  
  function updateCanvas() {
    ctx.clearRect(0,0,1500,1700);
    ctx.fillText("character1_x: " + character1.x, 580,40);
    ctx.fillText("character1_y: " + character1.y, 580,60);
    draw(character1);
  }

  updateCanvas();
  
