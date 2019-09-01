app.factory("RegistrationService", Service);

function Service($http, $localStorage){
  var service = {};
  service.Signup = Signup;
  return service;



  function Signup(gname, size, phone, callback){
    $http({
      method : "POST",
      url : "http://192.168.43.27:5000/q_entries",
      data : {
        "name" : gname,
        "position" : 11,
        "size" : size,
        "skip_count" : 0,
        "contact_details" : phone

      }
    }).then(function successCallback(response){
      //handling success
      if (response.data) {
            $localStorage.currentUser = {
              message : response.data.msg
            };
            callback(response.data);
          }else{
            callback(response.data);
          }
    }, function errorCallback(response){
      //handle error here
      callback(response.data);
    });
  }
}
