function showUserPage(response) {
    console.log(response);
    $('#app').empty();
    
    var user = response;


    var podCreationBtn = "</ul> <button id='podCreation' type='button' onclick='showPodStyle()' class='btn btn-lg btn-block btn-outline-primary'>Get your Pod!</button>";
    

    var userPage = "<div class='container'>" +
        "<h1 id='welcomeh1'>Welcome back, " + user.firstName + "!</h1>" +
        "<img id='userPic' src='resources/img/"+ user.firstName +".png' alt=" + user.firstName +" class='rounded'> <br>" +
        "<div class='card-deck mb-3 text-center'>" +
        "<div class='card mb-4 shadow-sm'>" +
        "<div class='card-header'>" +
        "<h4 class='my-0 font-weight-normal'>Cryo Pod Available</h4>" +
        "</div> <div class='card-body'>" +
        "<h1 class='card-title pricing-card-title'>5.999€<small class='text-muted'>/ mo</small>" +
        "</h1> <ul class='list-unstyled mt-3 mb-4'>" +
        "<li> default mode included</li>" +
        "<li>Live feed for your caretakers included</li>" +
        "<li>Email support for you and your caretakers</li>" +
        "<li>!!Custom choices are available!!</li>" +
        podCreationBtn +
        "</div> </div>" +
        "<div class='card mb-4 shadow-sm'>" +
        "<div class='card-header'>" +
        "<h4 class='my-0 font-weight-normal'>Caretaker Available Feeds</h4>" +
        "</div>" +
        "<div class='card-body'>" +
        "<h1 class='card-title pricing-card-title'>No extra charge</h1>" +
        "<h3>24/7 feed available</h3>" +
        "<ul id='caretakers-list' class='list-unstyled mt-3 mb-4'>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "</div>" 


        $(userPage).appendTo(app);

        $.ajax({
            url: 'http://192.168.250.78:8080/LetItGo/api/user/caretaker?email=' + user.email,
            async: true,
            success: populateList,
            error: invalidCredentials
        })
    
    function populateList(response) {
        response.forEach(element => {
            var listItem = "<li>" + element.firstName + "<button type='button' onclick='showSeePod("+element.email+")' class='btn btn-success'>Go To Feed</button></li>";
            $(listItem).appendTo($('#caretakers-list'));
        });
    }
}

