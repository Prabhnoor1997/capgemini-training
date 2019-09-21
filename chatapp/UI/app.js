
var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function ($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS =======================================


        // .state('home.dashboard', {
        //     url: '/dashboard',
        //     templateUrl: 'dashboard.html',
        //     controller: 'DashboardCtrl'
        // })



        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================

        .state('login', {
            url: "/login",
            templateUrl: './components/login-form.html',
            controller: 'LoginCtrl',
        })

        .state('dashboard', {
            url: "/dashboard",
            templateUrl: './components/dashboard.html',
            //controller: 'LoginCtrl',
        })

        .state('register', {
            url: "/register",
            templateUrl: './components/register.html',
            controller: 'RegisterCtrl',
        })
        .state('forget', {
            url: "/forget",
            templateUrl: './components/forget.html',
            controller: 'ForgetCtrl',
        })

        .state('reset', {
            url: "/reset/:token",
            templateUrl: './components/reset.html',
            controller: 'ResetCtrl',
        })

    $urlRouterProvider.otherwise("login")



    // routerApp.controller('DashboardCtrl', function($scope, $state) {
    //   if ($scope.userID === undefined) {
    //         $state.go('login');
    //     }
    // });

})


