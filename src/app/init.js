// define iris components paths
iris.path = {
    welcome : { js: "welcome.js", html: "welcome.html" },
    todo: { js: "todo.js", html : "todo.html" },
    resource : "resource.js"
};


$(window.document).ready(

    function () {
        
        iris.baseUri("./app/");

        // show the initial screen
        iris.welcome(iris.path.welcome.js);
    }
);
