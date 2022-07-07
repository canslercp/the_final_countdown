
var requestUrlCovid = "https://data.cdc.gov/resource/n8mc-b4w4.json?$where=case_month between'2022-05' and '2022-05'";

var state = [{'name':'AL','count':0},{'name':'AK','count':0},{'name':'AZ','count':0},{'name':'AR','count':0},{'name':'CA','count':0},{'name':'CO','count':0},{'name':'CT','count':0},{'name':'DE','count':0},{'name':'FL','count':0},{'name':'GA','count':0},{'name':'HI','count':0},{'name':'ID','count':0},{'name':'IL','count':0},{'name':'IN','count':0},{'name':'IA','count':0},{'name':'KS','count':0},{'name':'KY','count':0},{'name':'LA','count':0},{'name':'ME','count':0},{'name':'MD','count':0},{'name':'MA','count':0},{'name':'MI','count':0},{'name':'MN','count':0},{'name':'MS','count':0},{'name':'MO','count':0},{'name':'MT','count':0},{'name':'NE','count':0},{'name':'NV','count':0},{'name':'NH','count':0},{'name':'NJ','count':0},{'name':'NM','count':0},{'name':'NY','count':0},{'name':'NC','count':0},{'name':'ND','count':0},{'name':'OH','count':0},{'name':'OK','count':0},{'name':'OR','count':0},{'name':'PA','count':0},{'name':'RI','count':0},{'name':'SC','count':0},{'name':'TN','count':0},{'name':'TX','count':0},{'name':'UT','count':0},{'name':'VT','count':0},{'name':'VA','count':0},{'name':'WA','count':0},{'name':'WV','count':0},{'name':'WI','count':0},{'name':'WY','count':0}]
 
// fetch and convert the cdc data---------------------------------------------->
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

