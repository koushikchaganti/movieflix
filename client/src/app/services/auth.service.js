/**
 * Created by Koushik on 12/28/2016.
 */
(function () {
    angular.module('movieflix')
        .service('AuthService', AuthService);
    AuthService.$inject =['$cookies'];
    function AuthService($cookies){
        var lctl = this;

        lctl.isAuthenticated = function () {
            return !($cookies.get('token')===undefined);
        }

    }
})();