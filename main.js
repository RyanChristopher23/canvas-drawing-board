var mouseevent="empty";
var last_X , last_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("width_line").value;
    mouseevent="mouseDown";
}
canvas.addEventListener("mouseleave",my_mouseLeave);
function my_mouseLeave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e){
    mouseevent="mouseUP"
}
canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){
current_x = e.clientX-canvas.offsetLeft;
current_y = e.clientY-canvas.offsetTop;

if (mouseevent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    console.log(last_X,last_Y);
    ctx.moveTo(last_X,last_Y);

    console.log(current_x,current_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
}
last_X=current_x;
last_Y=current_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}