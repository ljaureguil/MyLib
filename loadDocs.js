
function loadDoc(url,callback) {
  var xhttp = new XMLHttpRequest();
  
  xhttp.open("GET", url, false);
  xhttp.send();
callback(xhttp.responseText);

}