;(function(){
  google.maps.event.addDomListener(window,"load",()=>{
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        center: {
          lat: -34.697898,
          lng:-58.468795
        },
        zoom:15
      }
    )
  })
})()