function showSeePod(element) {
    console.log('showing see pod');

    $('#app').empty();

    var seePod = "<div class='container'>" +
        "<br>" +
        "<br>" +
        "<div class='text-center'>" +
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
        "<button id='returnBtn' type='submit' onclick='showUserPage("+elemen+")' class='btn btn-primary'>Previous Page</button>" +
        "<button id='letItGoBtn' type='submit' onclick='letItGo()' class='btn btn-primary'>Let it Goooo!</button>" +
        "</div>" +
        "</div>";

    $(seePod).appendTo(app);

    function letItGo(){
        $('#app').empty();
        
       var shavedIce = "<div class='container'>" +
       "<img src='letItGo.png' alt='shavedIce'>" +
       "</div>"
    }

}