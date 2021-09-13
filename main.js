let btn = document.querySelector(".btn-input");

const changeText = (x) => {
    ip__show = document.getElementById("ip-getter").textContent = x.ip
    loc = document.getElementById("location").textContent =`${x.location.city},${x.location.country}. ${x.location.postalCode}`
    document.getElementById("timezone").textContent = x.location.timezone
    document.getElementById("isf").textContent = x.isp
}
const ValidateIPaddress = (ipaddress) => {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true)  
    }  

  }  
btn.addEventListener("click", api__getter)
