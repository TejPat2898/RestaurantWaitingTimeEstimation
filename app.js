var app = angular.module("myApp", ['ngRoute', 'ngMessages', 'ngStorage']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'dashboard/index.dashboard.html',
      controller : 'Index.DashboardController',
      controllerAs : 'rg'
    })
    .when('/notifications', {
      templateUrl : "notifications/index.notifications.html",
      //controller : "Index.RegisterController",
      //controllerAs: "rg"
    })
    .when('/user', {
      templateUrl : "user/index.user.html",
      //controller : "Index.RegisterController",
      //controllerAs: "rg"
    });

    //.otherwise('/');    //this thing has to be FIXED
});

app.controller("HomeController", Controller);

function Controller($location, $rootScope, $http){

    var hm = this;

    $http({
      method: "GET",
      url : "http://127.0.0.1:8000/events/"

    }).then(function successCallback(response){
      if (response.data) {
        hm.evnt = response.data;
      }
    }, function errorCallback(response){
      alert(response.data);
    });

    hm.change = change;
    function change(){
      window.location.href = "#!/register";
    }


}
