//configure paths
requirejs.config({
    baseUrl: 'third',
    paths: {
        app: '../app'
    }
});

// bootstrapos the app, main.js contains my app logic
requirejs(['app/main']);