   function getPos(callback) {
      navigator.geolocation.getCurrentPosition((position) => {
          var ob = {
              latitud: position.coords.latitude,
              longitud: position.coords.longitude
          };
          callback(ob)
      })
  }                                     



    function toRad(x) {
        return x * Math.PI / 180;
    }

    function toDegrees(radians) {
        return radians * 180 / Math.PI;
    }


   function harversin(p1, p2) { 
        // good
  /*      
        if(!di){
            var pp={};
            pp.a=p2.latitud;pp.b=p2.longitud;
            p2.latitud=p1.latitud;
            p2.longitud=p1.longitud;
            p1.latitud=pp.a;
            p1.longitud=pp.b;
        }
    */    
        var R = 6378137;
        var dLat = toRad(p2.latitud * 1 - p1.latitud * 1); ///alert(dlat);
        var dLon = toRad(p1.longitud * 1 - p2.longitud * 1); //alert(dlon);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(p1.latitud)) *
            Math.cos(toRad(p2.latitud)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var d = 12742 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        var dm = d.toFixed(4);
        
        // convert to miles
        d = d / 1.60934;
        d = d / 1000;
        df = 5280 * d;
        df=df.toFixed(4);
        d=d.toFixed(4);
        ////////
        var startLat = toRad(p1.latitud);
        var startLng = toRad(p1.longitud);
        var destLat = toRad(p2.latitud);
        var destLng = toRad(p2.longitud);

        y = Math.sin(destLng - startLng) * Math.cos(destLat);
        x = Math.cos(startLat) * Math.sin(destLat) -
            Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
        brng = Math.atan2(y, x);
        brng = toDegrees(brng);
        var bearing = (brng + 360) % 360;
        var sb=bearing+"",sp=sb.split("."),saz=sp[0],smi=sp[1];
        
         var ro={
            meters:dm,
            miles:d,
            feet:df,
            azimuth:bearing
         }
         return ro;

        /////////////
    //    eres.innerHTML = "Dist in m =" + dm + "<br>Dist in miles =" + d + "<br>Dist in ft =" + df + "<br>Bearing or azimuth= " + bearing;


    }

