var button = document.querySelector('.container button');
var jokeText = document.querySelector('.container p');

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
//     var jokeData = fetch('https://icanhazdadjoke.com/', {
//         headers: {
//             'Accept': 'application/json'
//         }
//     });
//     var jokeObject = jokeData.json(); 
//     console.log(jokeObject.joke);
// }

