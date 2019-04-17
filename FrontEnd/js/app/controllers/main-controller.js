define(['views/main-view', 'services/change-me-service'], function(changeMeView, changeMeService) {

    var externals = {}; // external api

    /*
        Bind event handlers and render the view
    */
    externals.start = function() {
        bindEvents();
        // render only the button
        changeMeView.render();
    }

    // bind event handlers to view
    function bindEvents() {
        changeMeView.bind('changeMe', changeMeHandler);
    }

    // user clicked on button
    function changeMeHandler() {

        var value = Math.floor(Math.random() * 6);

        changeMeService.getFilm(value, function(data) {
            changeMeView.render(data);
        });
    }

    return externals;
});