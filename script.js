
function zegar(){
  let czas=new Date();
  let g = czas.getHours();
  let m = czas.getMinutes();
  let s = czas.getSeconds();
  let zegar = document.getElementById("zegar") ;
    if(g<10){g="0"+g;}
    if(m<10){m="0"+m;}
    if(s<10){s="0"+s;}
  g.toString();
  m.toString();
  s.toString();

  zegar.innerHTML=`${g}:${m}:${s}`;
  kolor = `#${g}${m}${s}`
  zegar.style.textShadow = `3px 3px ${kolor}`
setTimeout("zegar()",1000)
}

function data(){
let czas=new Date();
let tyg = czas.getDay();
let d = czas.getDate();
if(d<10){d="0"+d;}
let mies = czas.getMonth()+1;
if(mies<10){mies="0"+mies;}
let rok = czas.getFullYear();
if (tyg == 1){tyg="Pon"}
if (tyg == 2) {tyg="Wt"}
if (tyg == 3) {tyg="Sr"}
if (tyg == 4){tyg="Czw"}
if (tyg == 5){tyg="Pt"}
if (tyg == 6) {tyg="Sob"}
if (tyg == 0) {tyg="Ndz"}
let data = document.getElementById("data") ;
tyg.toString();
d.toString();
mies.toString();
rok.toString();
data.innerHTML=`${d}.${mies}.${rok} ${tyg}`;
kolor = `#${mies}${rok}`
data.style.textShadow = `3px 3px ${kolor}`
}

function miband(){
var puls = document.querySelector("#puls");
var steps = document.querySelector("#steps");
var data = document.querySelector("#data")
var zegar = document.querySelector("#zegar")
steps.style.visibility = "visible";
puls.style.visibility = "visible";
zegar.style.color = "white";
data.style.color = "white";
}
function mibandoff(){
var puls = document.querySelector("#puls");
var steps = document.querySelector("#steps");
var data = document.querySelector("#data")
var zegar = document.querySelector("#zegar")
steps.style.visibility = "hidden";
puls.style.visibility = "hidden";
zegar.style.color = "#272d33";
data.style.color = "#272d33";
}
zegar();
data();



