/**
 * Created by Koushik on 12/22/2016.
 */
(function () {
    angular.module('movieflix')
        .controller('EditController',EditController);

    EditController.$inject = ['TitleService','$stateParams','MovieUpdateService'];
    function EditController(TitleService,$stateParams,MovieUpdateService) {

        var ectl = this;

        TitleService.getTitle($stateParams.titleId)
            .then(function (resp) {
                ectl.title = resp;
            },function (err) {
                console.log(err);
            })
        
        this.updateMovie = function (id,moviedetails) {

            MovieUpdateService.updateTitle(id,moviedetails)
                .then(function (resp) {
                    ectl.status = resp;
                },function (err) {
                    console.log(err);
                });
        }
    }
})();