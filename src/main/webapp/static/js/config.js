siteApp.config(['$routeProvider' , function($routeProvider){
    $routeProvider
        .when('/create-site',
        {
            templateUrl:"static/template/create-site.html",
            controller:'CreateSiteCtrl'
        })
        .otherwise({
            redirectTo : '/'
    });

}]);