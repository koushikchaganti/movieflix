/**
 * Created by Koushik on 12/19/2016.
 */

(function () {
    'use strict';
    angular.module('movieflix')
        .controller('SeriesController', SeriesController);

    SeriesController.$inject = ['SeriesService'];
    function SeriesController(SeriesService) {
        var sVm = this;
        sVm.pageSize = 18;
        sVm.currentPage = 1;
        SeriesService.getSeries()
            .then(function (resp) {
                sVm.series = resp;
            }, function (err) {
                console.log(err);
            })
    }
})();