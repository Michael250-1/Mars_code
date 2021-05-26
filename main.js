canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
var Roverwidth=100,Roverheight=90;
var Roverx=10,Rovery=10;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
  Mars_image=new Image();
  Mars_image.onload=uploadrover;
  Mars_image.src=rover_image;

  bg_image=new Image();
  bg_image.onload=uploadbg;
  bg_image.src=background_image;
}

function uploadbg(){
    ctx.drawImage(bg_image, 0,0, canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(Mars_image, Roverx,Rovery, Roverwidth,Roverheight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypress=e.keycode;
    if (keypress=="37") {
     Left();
     console.log("left");
    }

    if (keypress=="38") {
        Up();
        console.log("up");
       }

       if (keypress=="39") {
        Right();
        console.log("right");
       }

       if (keypress=="40") {
        Down();
        console.log("down");
       }
}