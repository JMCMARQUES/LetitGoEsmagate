function showPodPlaylist() {
    console.log('showing pod playlist');

    $('#app').empty();

    var ShowPodPlaylist = "<div class='container'>" +
        "<nav class='navbar navbar-expand-lg fixed-top navbar-dark bg-dark  '>" +
        "<a class='navbar-brand' href='#'>FROZEN User Page</a>" +
        "</nav>" +
        "</div>" +
        "<br>" +
        "<br>" +
        "<div class='text-center'>" +
        "<iframe src='https://open.spotify.com/embed/user/tiagomspatricio/playlist/6OTfGJPezuilWkyh1fC882' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>" +
        "</div>" +
        "<br>" +
        "<div class='card-deck mb-3 text-center'>" +
        "<div class='card mb-4 shadow-sm'>" +
        "<div class='card-header'>" +
        "<h4 class='my-0 font-weight-normal'>This playlist will play while you are frozen.</h4>" +
        "</div>" +
        "<br>" +
        "<br>" +
        "<div class='float-right'>" +
        "<button id='playlistConfirm' type='button' onclick='podCaretaker()' class='btn btn-lg btn-block btn-outline-primary'>Next!</button>" +
        "<button id='getBack' type='button' class='btn btn-lg btn-block btn-outline-primary'>Get back!</button>" +
        "</div>" +
        "</div>" +
        "</div>";

    (showPodPlaylist).appendto(app);


}