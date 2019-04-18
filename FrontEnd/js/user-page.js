function showUserPage(response) {
  console.log(response);
  $("#app").empty();

  var user = response;

  var podCreationBtn =
    "</ul> <button id='podCreation' type='button' onclick='showPodStyle()' class='btn btn-lg btn-block btn-outline-primary'>Get your Pod!</button>";

  var userPage =
    "<div class='container'>" +
    "<h1 id='welcomeh1'>Welcome back, " +
    user.firstName +
    "!</h1>" +
    "<img class='img-fluid' id='userPic' src='resources/img/" +
    user.firstName +
    ".png' alt=" +
    user.firstName +
    " class='rounded'>" +
    "<div class='card-deck mb-3' id='card-container'>" +
    "<div class='card mb-4 shadow-sm'>" +
    "<div class='card-header'>" +
    "<h4 class='font-weight-normal'>Cryo Pod Available</h4>" +
    "</div> <div class='card-body'>" +
    "<h1 class='card-title pricing-card-title'>5.999€<small class='text-muted'> / yr</small>" +
    "</h1>" +
    "<ul class='mt-3 mb-4'>" +
    "<li>Live in the future</li>" +
    "<li>No more bills</li>" +
    "<li>Endless cryopod customization</li></ul>" +
    podCreationBtn +
    "</div> </div>" +
    "<div class='card mb-4 shadow-sm'>" +
    "<div class='card-header'>" +
    "<h4 class='font-weight-normal'>Live Feeds</h4>" +
    "</div> <div class='card-body'>" +

    "<div class='container-fluid'><table class='table-responsive table mt-3 mb-4' id='caretakers-list'>" +
    "</table></div>" +
    "</div>" +
    "</div>";

  $(userPage).appendTo(app);

  $.ajax({
    url:
      "http://192.168.250.78:8080/LetItGo/api/user/caretaker?email=" +
      user.email,
    async: true,
    success: populateList,
    error: invalidCredentials
  });

  function populateList(response) {
    response.forEach(element => {
      var listItem =
        "<tr><td id='nameTD'><h3 id='rowh3'>" +
        element.firstName +
        "</h3></td><td id='btnTD'><button type='button' onclick='showSeePod(" +
        element.email +
        ")' class='btn btn-success' id='goToFeedBtn'>Go To Feed</button></td></tr>";
      $(listItem).appendTo($("#caretakers-list"));
    });
  }
}
