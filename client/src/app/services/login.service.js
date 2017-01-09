/**
 * Created by Koushik on 12/28/2016.
 */

(function () {
    angular.module('movieflix')
        .service('LoginService',LoginService);

    LoginService.$inject = ['$http','CONFIG'];

    function LoginService($http,CONFIG) {
        this.authUser = function (login) {

            var configAuth = {
                method: 'POST',
                url:CONFIG.API_HOST+'/login',
                data:login
            }

            return $http(configAuth)
                .then(function (resp) {
                    return resp;
                },function (err) {
                    return err;
                })
        }
    }
})();