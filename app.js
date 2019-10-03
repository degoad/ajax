$(document).ready(function() {
  $.getJSON("data.json", function(data) {
    console.log(data);
    $('#name').text( data.name );
    $('#email').text( data.email );

    $.each( data.games_owned, function(i) {
      var li = $('<li></li>');
      $(li).text( data.games_owned[i].name );
      $('#games_owned').append( li );
    })
  });
})
