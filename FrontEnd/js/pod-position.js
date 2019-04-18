function showPodPos() {
    console.log('showing podposition')


    $('#app').empty();
    let nextBotton = "<button id='podCreation' type='button' class='btn btn-lg btn-block btn-outline-primary' onclick='showPodPlaylist()'>Next!</button>";


    var podPosition = "<div class='container'>" +
       
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
        "<div class='form-check form-check-inline'>"+
            "<input type='radio' class='form-check-input' id='hanSoloPosition' name='materialExampleRadios'>" +
            "<label class='form-check-label' for='materialUnchecked'>Han Solo position</label>" +
        "</div>"+
        "<div class='form-check form-check-inline'>"+
            "<input type='radio' class='form-check-input' id='frozenPosition' name='materialExampleRadios'" +
            "checked>" +
        "<label class='form-check-label' for='materialChecked'>Frozen cowboy</label>" +
        "</div>"+
        "</div>" +
        nextBotton +
        "</div></div></div>"

    $(podPosition).appendTo(app)

}
