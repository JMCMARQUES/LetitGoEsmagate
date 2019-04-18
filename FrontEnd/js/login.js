var showLogin = function showLogin() {


    console.log('showLogin()');


    $('#app').empty();
    let confirmLoginBtn = "<button id='loginConfirm' onclick='verifyCredentials()' type='submit' class='btn btn-primary'>Login</button>"
    let invalidCredentialsError = "<div id='invalidCredentialsError' class='hide'>Invalid credentials </div>";

    var loginPage = "<div id='godown' class='container'>" +
        "<div>" +
        "<h1>Login</h1>" +
        "<form class='px-4 py-3'>" +
        "<div class='form-group'>" +
        "<label for='exampleDropdownFormEmail1'>Email address</label>" +
        "<input type='email' class='form-control' id='emailInput' placeholder='email@example.com'>" +
        "</div>" +
        "<div class='form-group'>" +
        "<label for='exampleDropdownFormPassword1'>Password</label>" +
        "<input type='password' class='form-control' id='passwordInput' placeholder='Password'>" +
        "</div>" +
        invalidCredentialsError +
        confirmLoginBtn +
        "<button id='logincancel' type='submit' class='btn btn-primary'>Cancel</button>" +
        "</form>" +
        "<div class='dropdown-divider'></div>" +
        "<a class='dropdown-item' href='#'>New around here? Sign up</a>" +
        " </div>" +

        "</div>";

   
    
    //confirmLoginBtn.click(verifyCredentials);

    $(loginPage).appendTo(app);
}

function verifyCredentials() {
    console.log('inside ajax request');
    $.ajax({
        url: 'http://192.168.250.78:8080/LetItGo/api/user/'+$('#passwordInput').val()+'?email=' + $('#emailInput').val(),
        async: true,
        success: showUserPage,
        error: invalidCredentials
    })
}

function invalidCredentials() {
    $("#invalidCredentialsError").removeClass('hide');
    
    $("#invalidCredentialsError").addClass('show');
}

var showSignUp = function showSignUp() {
    console.log("sign up bitch");
}