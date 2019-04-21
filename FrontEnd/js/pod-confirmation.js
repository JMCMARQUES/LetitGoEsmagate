function podConfirmation() {
    console.log('confirmation reached');

    $('#app').empty();

    var confirmations = " <div class='container'>" +
        "<nav class='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>" +
        "<a class='navbar-brand' href='#'>FROZEN Confirmation Page</a>" +
        "</nav></div>" +

        "<div id='godown'>" +
        "<div class='row mb-3'>" +
        "<div class='col-12 col-md-8 themed-grid-col'>Pod Type</div>" +
        "<div id='podType' class='col-6 col-md-4 themed-grid-col'>" +
        "</div></div>" +
        "<div class='row mb-3'>" +
        "<div class='col-12 col-md-8 themed-grid-col'>Pod Colour</div>" +
        "<div id='podColour' class='col-6 col-md-4 themed-grid-col'>" +
        "</div></div>" +
        "<div class='row mb-3'>" +
        "<div class='col-12 col-md-8 themed-grid-col'>Pod Position</div>" +
        "<div id='' class='col-6 col-md-4 themed-grid-col'>" +
        "</div></div>" +
        "<div class='row mb-3'>" +
        "<div class='col-12 col-md-8 themed-grid-col'>Caretakers List</div>" +
        "<div id='caretakersList' class='col-6 col-md-4 themed-grid-col'>" +
        "</div></div>" +
        "<div class='row mb-3'>" +
        "<div class='col-12 col-md-8 themed-grid-col'>Number of Years</div>" +
        "<input id='lastNameSignUp' type='text' class='form-control mb-2' id='inlineFormInput' placeholder='Insert the number of yesr you wish to be under crio'>" +
        "</div></div><div>" +
        "<button id='signInSubmitBtn' type='submit' class='btn btn-primary'>Confirm Conditions</button>" +
        "<button id='cancelSignUp' type='submit' class='btn btn-primary'>Return</button>" +
        "</div>"

$(confirmations).appendTo(app);

}