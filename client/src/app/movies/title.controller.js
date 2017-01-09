(function () {
    'use strict';
    angular.module('movieflix')
        .controller('TitleDetails', TitleDetails);

    TitleDetails.$inject = ['TitleService', '$stateParams'];

    function TitleDetails(TitleService, $stateParams) {
        var title = this;

        TitleService.getTitle($stateParams.titleId)
            .then(function (resp) {
                title.movie = resp;
            }, function (err) {
                console.log(err);
            })
    }

})();