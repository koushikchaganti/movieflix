/**
 * Created by Koushik on 12/19/2016.
 */

(function () {
    'use strict';
    angular.module('movieflix')
        .service('MovieService',MovieService);

    MovieService.$inject = ['$http','CONFIG'];
    function MovieService($http,CONFIG) {
        this.getMovies = function () {

            var config = {
                method:'GET',
                url:CONFIG.API_HOST+'/titles/type/movie',
                header:{'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrb3VzaGlrLmNoYWdhbnRpQGdtYWlsLmNvbSIsInJvbGVzIjoiVXNlciIsImV4cCI6MTQ4Mjk1MzEyOSwiaWF0IjoxNDgyOTUxMzI5fQ.420eDZsHQinUDZobNKT1V76APBXuJrWnEn06mVAHhaA'}
            }
            
            return $http(config).then(function (resp) {
                return resp.data;
            },function (err) {
                console.log(err);
                return err;
            })
        }
    }
})();