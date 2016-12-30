/**
 * Created by Koushik on 12/28/2016.
 */
(function () {
    angular.module('movieflix')
        .service('RatingService',RatingService);
    RatingService.$inject = ['$http','CONFIG'];
    function RatingService($http,CONFIG) {
        this.rating = function (movieid,userid,rateJson) {
            console.log(rateJson);
            var config = {
                url:CONFIG.API_HOST + '/ratings/user/'+userid+'/title/'+movieid,
                method:'POST',
                data:rateJson
            }

            return $http(config)
                .then(function (resp) {
                    return resp.data;
                },function (err) {
                    return err;
                })
        }
    }

})();