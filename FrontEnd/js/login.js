var showLogin = function showLogin() {


    console.log('showLogin()');


    $('#app').empty();

    var loginPage = "<div id='godown' class='container'>" +
        "<div>" +
        "<h1>Login</h1>"+
        "<form class='px-4 py-3'>" +
        "<div class='form-group'>" +
        "<label for='exampleDropdownFormEmail1'>Email address</label>" +
        "<input type='email' class='form-control' id='exampleDropdownFormEmail1' placeholder='email@example.com'>" +
        "</div>" +
        "<div class='form-group'>" +
        "<label for='exampleDropdownFormPassword1'>Password</label>" +
        "<input type='password' class='form-control' id='exampleDropdownFormPassword1' placeholder='Password'>" +
        "</div>" +

        "<button id='loginConfirm' type='submit' class='btn btn-primary'>Login</button>" +
        "<button id='logincancel' type='submit' class='btn btn-primary'>Cancel</button>" +
        "</form>" +
        "<div class='dropdown-divider'></div>" +
        "<a class='dropdown-item' href='#'>New around here? Sign up</a>" +
        " </div>" +

        "</div>";

        let confirmLoginBtn = $('#loginConfirm');


        $(loginPage).appendTo(app);
}


var showSignUp = function showSignUp() {
    console.log("sign up bitch");
}