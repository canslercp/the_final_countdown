
var requestUrl = 'https://api.reliefweb.int/v1/disasters'
var diatext = document.getElementById("dia-text");
var diabtn = document.getElementById("diabtn");
var store;
var iter= 0;
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Reponse \n-------------');
  store=response;
  console.log(store.data[iter].fields.name);
});

diabtn.addEventListener("click",function(){
  diatext.textContent=store.data[iter].fields.name;
++iter;
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




