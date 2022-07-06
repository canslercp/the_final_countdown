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



