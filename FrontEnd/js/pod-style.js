function showPodStyle() {
    console.log('showing pod style');
    $('#app').empty();


    var podStylePage = "<div class='container" +
        "<nav class='navbar navbar-expand-lg fixed-top navbar-dark bg-dark  '>" +
        "<a class='navbar-brand' href='#'>FROZEN Pod Option</a>" +
        "</nav>" +
        "</div>" +



        "<div id='godown' class='card-deck mb-3 text-center'>" +
        "<div class='card mb-4 shadow-sm'>" +
        "<div class='card-header'>" +
        "<h4 class='my-0 font-weight-normal'>Pod Option 1</h4>" +
        "</div>" +
        "<div class='card-body'>" +
        "<h1 class='card-title pricing-card-title'>additional 1000€" +
        "<small class='text-muted'>/ year</small>" +
        "</h1>" +
        "<ul class='list-unstyled mt-3 mb-4'>" +
        "<img id='godown' src='resources/img/pod1.png' alt='pod1' class='rounded' width='100%'>" +
        "</ul>" +
        "<button type='button' class='btn btn-lg btn-block btn-outline-primary'>Chose Pod 1</button>" +
        "</div>" +
        "</div>" +
        "<div class='card mb-4 shadow-sm'>" +
        "<div class='card-header'>" +
        "<h4 class='my-0 font-weight-normal'>Pod Option 2</h4>" +
        "</div>" +
        "<div class='card-body'>" +
        "<h1 class='card-title pricing-card-title'>additional 2000€" +
        "<small class='text-muted'>/ year</small>" +
        "</h1>" +
        "<ul class='list-unstyled mt-3 mb-4'>" +
        "<img id='godown' src='resources/img/pod2.png' alt='pod2' class='rounded' width='100%'>" +
        "</ul>" +
        "<button type='button' class='btn btn-lg btn-block btn-outline-primary'>Chose Pod 2</button>" +
        "</div>" +
        "</div>" +
        "<div class='card mb-4 shadow-sm'>" +
        "<div class='card-header'>" +
        "<h4 class='my-0 font-weight-normal'>Pod Option 3</h4>" +
        "</div>" +
        "<div class='card-body'>" +
        "<h1 class='card-title pricing-card-title'>additional 3000€" +
        "<small class='text-muted'>/ year</small>" +
        "</h1>" +
        "<ul class='list-unstyled mt-3 mb-4'>" +
        "<img id='godown' src='resources/img/pod3.png' alt='pod3' class='rounded' width='100%'>" +
        "</ul>" +
        "<button type='button' class='btn btn-lg btn-block btn-outline-primary'>Chose Pod 3</button>" +
        "</div>" +
        "</div>" +
        "<div class='card mb-4 shadow-sm'>" +
        "<div class='card-header'>" +
        "<h4 class='my-0 font-weight-normal'>Pod Option 4</h4>" +
        "</div>" +
        "<div class='card-body'>" +
        "<h1 class='card-title pricing-card-title'>additional 4000€" +
        "<small class='text-muted'>/ year</small>" +
        "</h1>" +
        "<ul class='list-unstyled mt-3 mb-4'>" +
        "<img id='godown' src='resources/img/pod4.png' alt='pod4' class='rounded'width='100%'>" +
        "</ul>" +
        "<button type='button' class='btn btn-lg btn-block btn-outline-primary'>Chose Pod 4</button>" +
        "</div>" +
        "</div>" +
        "</div>" +

        "<div>" +
        "<button id='returnBtn' type='submit' class='btn btn-primary'>Previous Page</button>" +
        "<button id='nextBtn' type='submit' class='btn btn-primary'>Next Page</button>" +

        "</div>";


    $(podStylePage).appendTo(app);
}