
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var pos = { x: 0, y: 0 };
ctx.lineWidth = 1.5;

//mouse input
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

//touch input
document.addEventListener('touchmove', draw);
document.addEventListener('touchstart', setTouchPosition);
//document.addEventListener('mouseenter', setPosition);

var imageUpload = document.getElementById("inputSketch");
imageUpload.addEventListener('change', handleImage, false);

function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img,0,0, canvas.width, canvas.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function setTouchPosition(e){
  if(!e)
    var e = event;

  if(e.touches){
    if (e.touches.length == 1) { // Only deal with one finger
      var touch = e.touches[0]; // Get the information for finger #1
      pos.x = touch.pageX-touch.target.offsetLeft;
      pos.y = touch.pageY-touch.target.offsetTop;
    }
  }
}

function setPosition(e){
  if (!e)
    var e = event;

  if (e.offsetX) {
    pos.x = e.offsetX;
    pos.y = e.offsetY;
  }
  else if (e.layerX) {
    pos.x = e.layerX;
    pos.y = e.layerY;
  }
}

function draw(e){

  if(e.buttons !== 1)
    return;

  ctx.beginPath();
  //ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.closePath();
  ctx.stroke();
}

function clearCanvas(){

    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function pencil(){
  ctx.strokeStyle = "#000000";
}
function erase(){
  ctx.strokeStyle = "#ffffff";
}

function setWidth(i){
  ctx.lineWidth = i;
}

