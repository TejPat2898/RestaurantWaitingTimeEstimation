app.controller('Index.DashboardController', Controller);

function Controller($location,$scope, $http, $rootScope, RegistrationService){
  $rootScope.flag = 1;

  var rg = this;
  rg.regex='[A-Za-z]*';
  rg.menu = [  "",
              "Breakfast",
              "Lunch",
              "Dinner"];

  $http({
    method : "GET",
    url : "http://192.168.43.27:5000/q_entries"
  }).then(function successCallback(response){
      rg.need = response.data;
      console.log(rg.need);
  }, function errorCallback(response){
      alert(response.data);
  });

  rg.signup = signup;
  function signup(){

    rg.loading = true;
    var phoneString = rg.phone.toString();
    RegistrationService.Signup(rg.gname,rg.gsize,phoneString, function(result){
      if(result){
        confirm("Registration Successfull!");
        alert("Booked in the name of : "+ rg.gname);
        console.log(result);
        rg.abc = result;
        rg.loading = false;
        //window.location.href = "#!/";
      }
      else {
        alert("else part " + result);
        rg.loading = false;
      }
    })

  }
}
