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





var requestUrlCovid = "https://data.cdc.gov/resource/n8mc-b4w4.json?$where=case_month between'2022-05' and '2022-05'";

var state = [{'name':'AL','count':0},'AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM',{'name':'NY','count':0},'NC','ND','OH','OK','OR','PA','RI','SC','SC','TN','TX','UT','VT','VA','WA','WV','WI','WY']
console.log(state.length)    

$.ajax({
    url: requestUrlCovid,
    type: "GET",
    data: {
      "$limit" : 10000,
    }
}).done(function(data) {
    // console.log('Covid cases by state only during 05/2022 \n----------');
    for (var i = 0; i < data.length; i++) {
      //console.log(data[i].res_state);

      var dataState = data[i].res_state
      var storeName;
      var storeCount;
     

      for (var x = 0; x < state.length; x++){
        
        if (dataState == state[x].name){
          state[x].count++;
          
          storeName = state[x].name;
          storeCount = state[x].count;
          // console.log(storeName);

          var statetext = document.getElementById("statetext");
          var statebtn = document.getElementById("statebtn");
          //button to generate positive covid cases by state
          statebtn.addEventListener("click",function(){
          statetext.textContent = 'Positive COVID cases by state last month= ' + storeName + ': ' + storeCount;
          
          })

          var saveStateBtn = document.getElementById('saveStateBtn');
          var favState = [JSON.parse(localStorage.getItem('state'))]
          // if(favState){
          //   for(var i = 0;)
          // }

          saveStateBtn.addEventListener('click',function(){
            window.localStorage.setItem()
          })
          console.log(localStorage);
//attemp at a drop down menu to select state data
          // var statetext = document.getElementById('statetext')
          // //select a state function ------------------------------------------------------>
          // $(document).ready(function() {
          //   $( "#state" ).selectmenu();
          
          // $( "#state" ).on( "selectmenuselect", function() {
          //   //alert('Selectmenu select event triggered!');
          //   if ($(this).val() == state[x]){
          //     statetext.textContent = state[x];
              
          //   }
          // } );
          
          
          // } );
      }
      }
    }
});

    // pseudo code:
    // if res_state === state
    //   count the number of case for that state
    //   append to element in html (textContent= state + ': ' + res_state variable.length )

var requestUrlDisasters = 'https://api.reliefweb.int/v1/disasters'
var diatext = document.getElementById("dia-text");
var diabtn = document.getElementById("diabtn");
var store;
var iter= 0;
$.ajax({
  url: requestUrlDisasters,
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


function addToFavorites(){ 
    var favoriteJokes = JSON.parse(window.localStorage.getItem('jokes'))

    if(favoriteJokes && favoriteJokes.length) {
        window.localStorage.setItem('jokes', JSON.stringify([...favoriteJokes, jokeText.innerHTML]))
    } else {
        window.localStorage.setItem('jokes', JSON.stringify([jokeText.innerHTML]))
    }
}


