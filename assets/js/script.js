var requestUrl = "https://data.cdc.gov/resource/n8mc-b4w4.json?$where=case_month between'2022-05' and '2022-05'";

var state = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SC','TN','TX','UT','VT','VA','WA','WV','WI','WY']
console.log(state.length)    

$.ajax({
        url: requestUrl,
        type: "GET",
        data: {
          "$limit" : 1000,
        }
    }).done(function(data) {
        // console.log('Covid cases by state only during 05/2022 \n----------');
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].res_state.);

          var count = 0;

          for (var i = 0; i < state.length; i++){
            if (data[i].res_state === state[i]){
              count++;

          }
          }
        }
        console.log(count);
    });

    // pseudo code:
    // if res_state === state
    //   count the number of case for that state
    //   append to element in html (textContent= state + ': ' + res_state variable.length )

        
