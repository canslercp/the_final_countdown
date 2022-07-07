var requestUrl = 'https://api.reliefweb.int/v1/disasters'
var diatext = document.getElementById("dia-text");
var diabtn = document.getElementById("diabtn");
var diasave = document.getElementById("diasvbt");
var store;

var iter= 0;
var Favobjs = [JSON.parse(localStorage.getItem("Dias"))]
if(Favobjs){
for(var i =0; i<Favobjs.length; i++){
  console.log(Favobjs);
}
}



$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Reponse \n-------------');
  store=response;
});

diabtn.addEventListener("click",function(){
  diatext.textContent=store.data[iter].fields.name;
++iter;
})

diasave.addEventListener("click",function(){
  Favobjs.push(store.data[iter].fields.name);
localStorage.setItem("Dias", JSON.stringify(Favobjs));
})

var button = document.querySelector('.container button');
var jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke);

async function getJoke(){
    var jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    var jokeObject = await jokeData.json(); 
    jokeText.innerHTML = jokeObject.joke;
}

// function getJoke(){
//     fetch('https://icanhazdadjoke.com/',{
//         headers:{
//             'Accept': 'application/json'
//         }
//     }).then(data=> data.json())
//       .then(obj => jokeText.innerHTML = object.joke)
// }




