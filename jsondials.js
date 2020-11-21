
        function GetAllJ(url,callback) {
            
        //var url  = "http://localhost:8080/api/v1/users";
        var xhr  = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onload = function () {
          var users = JSON.parse(xhr.responseText);
          if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
          } else {
            console.error(users);
          }
        }
        xhr.send(null);
        }
        
        // Get a user
        function GetJ(url,callback) {
            
        //var url  = "http://localhost:8080/api/v1/users";
        var xhr  = new XMLHttpRequest()
        xhr.open('GET', url+'/1', true)
        xhr.onload = function () {
          var users = JSON.parse(xhr.responseText);
          if (xhr.readyState == 4 && xhr.status == "200") {
          //	console.table(users);
          callback(users);
          } else {
            console.error(users);
          }
        }
        xhr.send(null);
        }
        
        // Post a user
        function PostJ(url,ob,callback) {
        //var url = "http://localhost:8080/api/v1/users";
        
        var data = {};
        data.firstname = "John";
        data.lastname  = "Snow";
        var json = JSON.stringify(data);
        
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.onload = function () {
          var users = JSON.parse(xhr.responseText);
          if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(users);
          } else {
            console.error(users);
          }
        }
        xhr.send(json);
        }
        
        // Update a user
        function UpdateJ(url,ob,callback) {
            var json = JSON.stringify(ob);//JSON.stringify(data);
        //alert("this will be sent: \n\n"+otot(ob))
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", url+'/12', true);
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.onload = function () {
          var users = JSON.parse(xhr.responseText);
          if (xhr.readyState == 4 && xhr.status == "200") {
          //  alert("Done...\n\nWait a few seconds and press refresh to check changes.")
        //	callback(users);
          } else {
            console.error(users);
          }
        }
        xhr.send(json);
        }
        
        // Delete a user
        function PostJ(url,callback) {
        //var url = "http://localhost:8080/api/v1/users";
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", url+'/12', true);
        xhr.onload = function () {
          var users = JSON.parse(xhr.responseText);
          if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
          } else {
            console.error(users);
          }
        }
        xhr.send(null);
        }
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
      navigator.geolocation.getCurrentPosition((position) => {
          var ob = {
              latitud: position.coords.latitude,
              longitud: position.coords.longitude
          };
          callback(ob)
      })
  }                            

