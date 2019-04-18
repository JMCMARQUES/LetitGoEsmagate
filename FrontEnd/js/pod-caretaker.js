function podCaretaker() {
    console.log('caretaker printing');

    $('#app').empty();

    var caretaker = " <div class='container'>" +
        "<nav class='navbar navbar-expand-lg fixed-top navbar-dark bg-dark  '>" +
        "<a class='navbar-brand' href='#'>FROZEN User Page</a>"
    "</nav></div><br><br>" +
        "<div class='text-center'>" +
        "<img id='podpos' src='resources/img/caretakers.jpg' alt='sam' class='rounded' width='500'>"
    "</div><br>" +
        "<div class='card-deck mb-3 text-center'>" +
        "<div class='card mb-4 shadow-sm'>" +
        "<div class='card-header'>" +
        "<h4 class='my-0 font-weight-normal'>Choose your caretakers:</h4>" +
        "</div>" +
        "<div class='card-body'>" +
        "<!-- Search form -->" +
        "<input class='form-control' type='text' placeholder='Search' aria-label='Search'>" +
        "</div><div>" +
        "<table class='table'>" +
        "<thead>" +
        "<tr>" +
        "<th scope='col'>Picture</th>" +
        "<th scope='col'>email</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +

        "</tbody>" +
        "</table>" +
        "</div><p><div>" +
        "<button id='podCreation' type='button' class='btn btn-lg btn-block btn-outline-primary'>Next!</button>" +

        "</div></div></div></div>"

}