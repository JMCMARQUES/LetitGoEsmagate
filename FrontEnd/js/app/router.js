
define(function () {


    var internals = {};
    var externals = {};

    internals.routes = {
        mainPage: {
            hash: '#mainPage',
            controller: 'main-controller'
        },
        loginPage: {
            hash: '#login-page',
            controller: 'login-controller'
        },
        registrationPage: {
            hash: 'register-page',
            controller: 'register-controller'
        }
    }

    internals.defaultRoute = 'mainPage';
    internals.currentHash = '';

    externals.start = function () {
        window.location.hash = window.location.hash || internals.routes[internals.defaultRoute].hash;
        setInterval(hashCheck, 100);
    }

    function hashCheck() {

        if (window.location.hash === internals.currentHash) {
            return; //if the current page is the same as in window.locartion.hash (or the hash gragment frim the url), nothing happens
        }

        var routname = Object.keys(internals.routes).find(function (name) {
            return window.location.hash === internals.routes[name].hash;
        })

        if (!routName) {
            loadDefaultRoute();
            return;
        }

        loadController(internals.routes[routName].controller);

    }

    function loadController(controllerName) {
        internals.currentHash = window.location.hash;
        require(['controllers/' + controllerName], function (controller) {

            try {
                controller.start();
            } catch {
                console.log(err.stack);
            }
            loadDefaultRoute();

        });
    }

    function loadDefaultRoute() {
        window.location.hash = internals.routes[internals.defaultRoute].hash;
        loadController(internals.routes[internals.defaultRoute].controller);
    }

    return externals;
})