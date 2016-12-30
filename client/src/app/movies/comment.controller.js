/**
 * Created by Koushik on 12/28/2016.
 */

(function () {
    angular.module('movieflix')
        .controller('CommentController',CommentController);
    CommentController.$inject = ['CommentService','$cookies'];
    function CommentController(CommentService,$cookies){

        var cctl = this;
        this.commentMovie = function (movieid,comment) {
            console.log(movieid,comment);
            var userid = $cookies.get('userId');
            CommentService.comment(userid,movieid,comment)
                .then(function (resp) {
                    cctl.comments = resp;
                },function (err) {
                    console.log(err);
                })

        }

    }
})();