/**
 * Created by Koushik on 12/27/2016.
 */
(function () {
    angular.module('movieflix')
        .controller('LoginController',LoginController)
    .run(function($http,$cookies) {
        var cookie = $cookies.get('token');
        var auth = 'Bearer '+ cookie;
        $http.defaults.headers.common.Authorization = auth;
    });
    LoginController.$inject=['$cookies','$location','LoginService','$http','$rootScope'];
    function LoginController($cookies,$location,LoginService,$http,$rootScope){
        var lctl = this;
        var loginDetails={};
        var service ={};

        this.loginUser = function (login) {
            console.log(login);
            LoginService.authUser(login)
                .then(function (resp) {
                    if(resp.status==200) {
                        lctl.loginDetails = resp.data;
                        $rootScope.global = lctl.loginDetails.token;
                        console.log(lctl.loginDetails.token);
                        $cookies.put('token', lctl.loginDetails.token);
                        $cookies.put('userId', lctl.loginDetails.userId);
                        $cookies.put('firstName', lctl.loginDetails.firstName);
                        $cookies.put('lastName', lctl.loginDetails.lastName);
                        $cookies.put('role', lctl.loginDetails.role);

                        if(resp.data.role == 'Admin'){
                            $location.path('/admin');
                        }
                        else if(resp.data.role == 'User'){
                            $location.path('/');
                        }
                        else{
                            $location.path('/login');
                        }
                    }
                    else{
                        lctl.alert = true;
                    }
                },function (err) {
                    // console.log(err);
                })
        }
    }

})();
