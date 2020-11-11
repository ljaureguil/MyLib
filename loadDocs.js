
function loadDoc(url,callback) {
  var xhttp = new XMLHttpRequest();
  
  xhttp.open("GET", url, false);
  xhttp.send();
callback(xhttp.responseText);

}
function showmsg(m){
  alert("parece que si se pudo" + m);
}

 function getPos(callback) {
      navigator.geolocation.getCurrentPosition(position) => {
          var ob = {
              latitud: position.coords.latitude,
              longitud: position.coords.longitude
          };
          callback(ob)
      }
  }                                                                          
