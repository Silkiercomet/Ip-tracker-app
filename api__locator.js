var ip = "190.188.8.8";    
    //var api_key = "at_gdyoltZTIMf5uDj0fRHL0HeN0Ovmv";    
    var api_key = "at_gdyoltZTIMf5uDj0fRHL1HeN0Ovmv";    
    $(function () {
      $.ajax({
          url: "https://geo.ipify.org/api/v1",
          data: {apiKey: api_key, ipAddress: ip},
          success: function(data) {
               var x = data;
               console.log(x.ip)
               console.log(`${x.location.city},${x.location.country}. ${x.location.postalCode}`)
               console.log(x.location.timezone)
               console.log(x.isp)
               console.log(`${x.location.lat}, ${x.location.lng}` )
          }
      });
   });