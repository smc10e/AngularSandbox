/**
 * Created by smcampbell on 11/5/2015.
 */
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
       .when('/', {
           templateUrl: 'views/home.html',
           controller: 'HomeController'
       })
       .when('/page2', {
           templateUrl: 'views/page2.html',
           controller: 'HomeController'
       })
       .otherwise({
           redirectTo:'/'
       });
});