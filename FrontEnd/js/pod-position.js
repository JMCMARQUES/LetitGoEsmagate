function showPodStyle() {
    console.log('showing podposition')


    $('#app').empty();
    let nextBotton ="<button id='podCreation' onclick='podCaretaker()'>";



    var podPosition = "<div class='container'>" +
        "<nav class='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>" +
        "<a class='navbar-brand' href='#'>FROZEN User Page</a>" +
        "</nav></div><br><br>" +
        "<div class='text-center'>" +
        "<img id='podpos' src='resources/img/podpos1.jpg' alt='sam' class='rounded' width='200'>" +
        "</div><br>" +
        "<div class='card-deck mb-3 text-center'>" +
        "<div class='card mb-4 shadow-sm'>" +
        "<div class='card-header'>" +
        "<h4 class='my-0 font-weight-normal'>Choose your frozen position:</h4>" +
        "</div>" +
        "<div class='card-body'>" +
        "<!-- Material unchecked -->" +
        "<div class='form-check'>" +
        "<input type='radio' class='form-check-input' id='hanSoloPosition' name='materialExampleRadios'>" +
        "<label class='form-check-label' for='materialUnchecked'>Han Solo position</label>" +
        "<input type='radio' class='form-check-input' id='frozenPosition' name='materialExampleRadios'" +
        "checked>" +
        "<label class='form-check-label' for='materialChecked'>Frozen cowboy</label>" +
        "</div>" +
        "<button id='podCreation' type='button' class='btn btn-lg btn-block btn-outline-primary'>Next!</button>" +
        "</div></div></div>"

    $(podPosition).appendTo(app)

}