/**
 * Created by Koushik on 12/19/2016.
 */
(function () {
    'use strict';
    angular.module('movieflix')
        .config(movieConfig);

    movieConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function movieConfig($stateProvider, $urlRouteProvider, $locationProvider) {
        // $locationProvider.html5Mode(true).hashPrefix('!');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/movies/homepage.html',
                data: {
                    authRequired: true
                }
            })
            .state('movies', {
                url: '/movies',
                templateUrl: 'app/movies/movieslist.html',
                controller: 'MovieController',
                controllerAs: 'mVm'
            })
            .state('series', {
                url: '/series',
                templateUrl: 'app/movies/series.html',
                controller: 'SeriesController',
                controllerAs: 'sVm'
            })
            .state('SeriesTitleDetails', {
                url: '/series/:titleId',
                templateUrl: 'app/movies/title.html',
                controller: 'TitleDetails',
                controllerAs: 'title'
            })
            .state('MoviesTitleDetails', {
                url: '/movies/:titleId',
                templateUrl: 'app/movies/title.html',
                controller: 'TitleDetails',
                controllerAs: 'title'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/user/signup.html',
                controller: 'SignUp',
                controllerAs: 'siup'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/admin/home.html',
                controller: 'AdminController',
                controllerAs: 'actl'
            })
            .state('edit', {
                url: '/edit/:titleId',
                templateUrl: 'app/admin/edittitle.html',
                controller: 'EditController',
                controllerAs: 'ectl'
            })
            .state('add', {
                url: '/add',
                templateUrl: 'app/admin/addtitle.html',
                controller: 'AddTitleController',
                controllerAs: 'actl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/user/signin.html',
                controller: 'LoginController',
                controllerAs: 'lctl'
            });
        $urlRouteProvider.otherwise('/home');
    }
})();