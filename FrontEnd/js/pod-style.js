function showPodStyle() {
    console.log('showing pod style');
    $('#app').empty();

    var podCreationBtn = "</ul> <button id='podCreation' type='button' onclick='showPodStyle()' class='btn btn-lg btn-block btn-outline-primary'>Get your Pod!</button>";
    

    var podStylepage = '<div class="container">' +
    '<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">' +
        '<a class="navbar-brand" href="#">FROZEN User Page</a>' +
    '</nav>' +
'</div>' +

'<img id="godown" src="resources/img/sam.png" alt="sam" class="rounded">' +
'<br>' +

'<div class="card-deck mb-3 text-center">'+
    '<div class="card mb-4 shadow-sm">' +
       '<div class="card-header">' +
            '<h4 class="my-0 font-weight-normal">Cryo Pod Available</h4>' +
        '</div>' +
        '<div class="card-body"'+
            '<h1 class="card-title pricing-card-title">5.999€'+
                '<small class="text-muted">/ mo</small>' +
            '</h1>' +
            '<ul class="list-unstyled mt-3 mb-4">' +
                '<li> default mode included</li>'+
                '<li>Live feed for your caretakers included</li>'+
                '<li>Email support for you and your caretakers</li>' +
                '<li>!!Custom choices are available!!</li>' +
            '</ul>' +
            '<button id="podCreation" type="button" class="btn btn-lg btn-block btn-outline-primary">Get your Pod!</button>' +
        '</div>' +
    '</div>' +
    '<div class="card mb-4 shadow-sm">' +
        '<div class="card-header">' +
            '<h4 class="my-0 font-weight-normal">Caretaker Available Feeds</h4>' +
        '</div>' +
        '<div class="card-body">' +
            '<h1 class="card-title pricing-card-title">No extra charge</h1>' +
            '<ul class="list-unstyled mt-3 mb-4">' +
                '<li>24/7 feed available</li>' +
                '<li>.</li>' +
                '<li>.</li>' +
                '<li>.</li>'+
            '</ul>'+
            '<button id="checkFeeds" type="button" class="btn btn-lg btn-block btn-primary">Get Feeds</button>'+
        '</div>'+
    '</div>'+
'</div>'+


        $(podStylepage).appendTo(app);
}