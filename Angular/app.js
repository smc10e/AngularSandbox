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
       .when('/photos', {
           templateUrl: 'views/photos.html',
           controller: 'PhotosController'
       })
       .when('/projects', {
           templateUrl: 'views/projects.html',
           controller: 'ProjectsController'
       })
       .when('/contact', {
           templateUrl: 'views/contact.html',
           controller: 'ContactController'
       })
       .otherwise({
           redirectTo:'/'
       });
});