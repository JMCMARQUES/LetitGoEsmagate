require.config({

    // path to fetch all our modules from
    baseUrl: '/js/app'
});

// application entry point
requirejs(['main'], function() {
    console.log('All modules finished loading');
});