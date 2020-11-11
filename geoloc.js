   function getPos(callback) {
      navigator.geolocation.getCurrentPosition((position) => {
          var ob = {
              latitud: position.coords.latitude,
              longitud: position.coords.longitude
          };
          callback(ob)
      })
  }                                     