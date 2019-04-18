var showCaretaker = function() {
    console.log('caretaker printing');

    $('#app').empty();

    var caretaker = "<div class='container'>"+
    "<nav class='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>" +
        "<a class='navbar-brand' href='#'>FROZEN User Page</a>" +
    "</nav>" +
"</div>" +
"<div class='text-center'>" +
    "<img id='podpos' src='resources/img/caretakers.jpg' alt='sam' class='rounded' width='500'>"+
"</div>"+

"<div class='card-deck mb-3 text-center'>"+
    "<div class='card mb-4 shadow-sm'>"+
        "<div class='card-header'>"+
            "<h4 class='my-0 font-weight-normal'>Choose your caretakers:</h4>"+
        "</div>"+
        "<div class='card-body'>"+
            "<input class='form-control' type='text' placeholder='Search' aria-label='Search'>"+
        "</div>"+
        "<div>"+
            "<table class='table'>"+
                "<thead>"+
                    "<tr>"+
                    "<h5>"+"Sam"+"<h5>"+
                        "<button id='podCreation' type='button' onclick='thealert();showLogin()' class='btn btn-lg btn-block btn-outline-primary'>Add a CareTaker</button>"+
                        "<th scope='col'>email</th>"+
                    "</tr>"+
                "</thead>"+
                "<tbody>"+
                    
                "</tbody>"+
            "</table>"+
        "</div>"+
        "<p>"+
        "<div>"+
            "<button id='podCreation' type='button' class='btn btn-lg btn-block btn-outline-primary'>Next!</button>"+

        "</div>"+

    "</div>"+
"</div>"+

"</div>"

    $(caretaker).appendTo(app);

}

function thealert() {
    alert("Completed");
}