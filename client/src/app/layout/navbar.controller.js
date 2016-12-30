/**
 * Created by Koushik on 12/21/2016.
 */

(function () {
    angular.module('movieflix')
        .controller('NavbarController',NavbarController);

    NavbarController.$inject = ['$location','$cookies','$http'];
    function NavbarController($location,$cookies,$http) {

        this.firstName = $cookies.get('firstName');
        this.lastName = $cookies.get('lastName');

        this.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
        this.logout = function (logout) {
            console.log('entered logout')
            $cookies.remove('token');
            $cookies.remove('email');
            $cookies.remove('role');
            $cookies.remove('firstName');
            $cookies.remove('lastName');
            $cookies.remove('userId');
            $http.defaults.headers.common.Authorization = "";
            $location.path('/login')
        }

    }

})();