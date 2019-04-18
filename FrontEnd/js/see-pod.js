function showSeePod() {
    console.log('showing see pod');

    $('#app').empty();
    
   

    var seePod = "<div class='container'>" +
        
        "<div class='text-center embed-responsive embed-responsive-16by9'>" +
        "<iframe src='https://player.twitch.tv/?channel=caiokellermann' height='720' width='1280' frameborder='0'scrolling='no' allowfullscreen='true'>" +
        "</iframe>" +
        "</div>" +
        "<br>" +
        "<div class='card-deck mb-3 text-center'>" +
        "<div class='card mb-4 shadow-sm'>" +
        "<div class='card-header'>" +
        "<h4 class='my-0 font-weight-normal'>Live feed</h4>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<button id='returnBtn' type='submit' onclick='showUserPage()' class='btn btn-primary'>Previous Page</button>" +
        "<button id='letItGoBtn' type='submit' onclick='letItGo()' class='btn btn-primary btn-lg'>Let it Goooo!</button>" +
        "</div>" +
        "</div>";

    $(seePod).appendTo(app);


}

function letItGo(){
    $('#app').empty();
    
   var shavedIce = "<div class='container'> <br/>" +
   "<img src='resources/img/letItGo.png' alt='shavedIce' class='rounded' width='70%'>" +
   "</div>"

   $(shavedIce).appendTo(app);
}