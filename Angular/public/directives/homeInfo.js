/**
 * Created by smcampbell on 11/5/2015.
 */
app.directive('homeInfo', function(){
    return{
        restrict: 'E',
        scope: {
            title: '@'
        },
        templateUrl: 'directives/homeInfo.html'
    };
});