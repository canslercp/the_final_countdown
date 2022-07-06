var requestUrl = "https://data.cdc.gov/resource/n8mc-b4w4.json?$where=case_month between'2022-05' and '2022-05'";

    $.ajax({
        url: requestUrl,
        type: "GET",
        data: {
          "$limit" : 10000,
        }
    }).done(function(data) {
        console.log('Covid cases by state only during 05/2022 \n----------');
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].res_state);
        }
    });

    // pseudo code:
    // if res_state === state
    //   count the number of case for that state
    //   append to element in html (textContent= state + ': ' + res_state variable.length )

        
