/**
 * Created by Koushik on 12/28/2016.
 */
(function () {
    angular.module('movieflix')
        .controller('RatingController',RatingController);

    RatingController.$inject = ['RatingService','$cookies'];
    function RatingController(RatingService,$cookies){

        var rate = this;
        this.rateMovie = function (rating,movieid) {
             var rateJson = {
                 "Rating" : rating
             }
            console.log('Hello rating inside')
            var userid = $cookies.get('userId');
            RatingService.rating(movieid, userid, rateJson)
                .then(function (resp) {
                    rate.rating = resp;
                }, function (err) {
                    console.log(err)
                })
        }
    }
})();