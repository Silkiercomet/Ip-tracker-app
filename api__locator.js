    var j = 0;
    var api_key = "at_gdyoltZTIMf5uDj0fRHL0HeN0Ovmv";

    //var api_key = "at_gdyoltZTIMf5uDj0fRHL1HeN0Ovmv";

    let api__getter = function(){
         let ip = document.querySelector("#ip").value;
             $(function () {
                if(ValidateIPaddress(ip) === true){
                    $.ajax({
                        url: "https://geo.ipify.org/api/v1",
                        data: {apiKey: api_key, ipAddress: ip},
                        success: function(data) {
                            var x = data;
                            console.log(x)
                            changeText(x)
                            lat1 = x.location.lat
                            lag1 = x.location.lng
                            changeMap()

                        }
                    });
                }else{
                    alert("You have entered an invalid IP address!")  
                    return (false)  
                }

            })
    } ;
  
