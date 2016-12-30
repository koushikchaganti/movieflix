/**
 * Created by Koushik on 12/28/2016.
 */
(function () {
    angular.module('movieflix')
        .service('CommentService',CommentService);

    CommentService.$inject = ['$http','CONFIG'];
    function CommentService($http,CONFIG) {

        this.comment = function(userid,movieid,comment){
            var config = {
                url:CONFIG.API_HOST+'/comments/user/'+userid+'/title/'+movieid,
                method:'POST',
                data:comment
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
