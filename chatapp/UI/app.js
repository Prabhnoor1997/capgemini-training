
var routerApp = angular.module('routerApp', ['ui.router']);
// const  Chat  = require("../app/models/messageModel");
// const connect=require("../config/connect.config.js")

// socket.on("connection", socket  =>  {
//     console.log("user connected");
//     socket.on("disconnect", function() {
//     console.log("user disconnected");
//     });  
//     socket.on("chat message", function(msg) {
//         console.log("message: "  +  msg);
//         //broadcast message to everyone in port:5000 except yourself.
//     socket.broadcast.emit("received", { message: msg  });

//     //save chat to the database
//     connect.then(db  =>  {
//     console.log("connected correctly to the server");

//     let  chatMessage  =  new Chat({ message: msg, sender: "Anonymous"});
//     chatMessage.save();
//     });
//     });
// });








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
            controller: 'DashboardCtrl',
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
        .state('chatRoom', {
            url: "/chatRoom",
            templateUrl: './components/chatRoom.html',
            controller: 'ChatCtrl',
        })

        

    $urlRouterProvider.otherwise("login")





})


