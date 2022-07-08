var Favobjs=JSON.parse(localStorage.getItem("Dias"));
var jtest=JSON.parse(localStorage.getItem("jokes"));
var ctest=JSON.parse(localStorage.getItem("state"));

var favdia = document.getElementById("savedia");
var favjoke = document.getElementById("savejokes");
var favcdc = document.getElementById("savecdc");

console.log(jtest[1])
function createCarddia(data){
    cont = document.createElement("div");
    cont.className ="col card-style"
    cont.textContent=data;
    favdia.appendChild(cont);
  }
  function Cardloopdia(obj){
  for(var i =0; i<obj.length; i++){
    createCarddia(obj[i]);
  }
  }
  //JOKES
  function createCardjoke(data){
    cont = document.createElement("div");
    cont.className ="col card-style"
    cont.textContent=data;
    console.log("-----");
    console.log(cont.textContent);
    favjoke.appendChild(cont);
  }
  function Cardloopjoke(obj){
  for(var i =0; i<obj.length; i++){
    createCardjoke(obj[i]);
  }
  }
  //CDC
  function createCardcdc(data){
    cont = document.createElement("div");
    cont.className ="col card-style"
    cont.textContent=data;
    favcdc.appendChild(cont);
  }
  function Cardloopdcdc(obj){
  for(var i =0; i<obj.length; i++){
    createCardcdc(obj[i]);
  }
  }
  function LoadFavorites(){
    console.log("loading!!")
    Cardloopdcdc(ctest);
    Cardloopdia(Favobjs);
    Cardloopjoke(jtest);}
