// This is a JavaScript file
      function initialize() {
        var latlng = google.maps.LatLng(36.4037787, 138.2444306)
        var mapOptions = {
          center: new google.maps.LatLng(36.4024143, 138.2428686),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);

        var latlng1 = new google.maps.LatLng(36.4037787,138.2444306);
        var markerOpts = {
            position: latlng1,
            map: map
            };
        var marker = new google.maps.Marker(markerOpts);
        
        var latlng2 = new google.maps.LatLng(36.4024143,138.2428686);
        var markerOpts2 = {
            position: latlng2,
            map: map
            };
        var marker2 = new google.maps.Marker(markerOpts2);
      }
