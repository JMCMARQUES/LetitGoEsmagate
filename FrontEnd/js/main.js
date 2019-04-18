$(document).ready(function (){


    
var app = $('#app');
var loginButton = $('#loginBtn');
var signupButton = $('#signupBtn');
var signupNowButton = $('signupNowBtn');
    
loginButton.click(showLogin);
signupButton.click(showSignUp);
signupNowButton.click(showSignUp);


});