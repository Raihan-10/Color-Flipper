const body = document.getElementById("main");
const text=document.getElementsByTagName("button");

function setColor(name){
    body.style.background=name;
}

function randomColor(){
    let red=Math.round(Math.random()*255);
    let green=Math.round(Math.random()*255);
    let blue=Math.round(Math.random()*255);

    const color=`rgb(${red},${green}, ${blue})`;
    body.style.backgroundColor=color;
}
