/**
 * Created by smcampbell on 11/5/2015.
 */
var app = angular.module('myApp', ['ngRoute', 'sticky']);

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
       .when('/resume', {
           templateUrl: 'views/resume.html',
           controller: 'ResumeController'
       })
       .otherwise({
           redirectTo:'/'
       });
});