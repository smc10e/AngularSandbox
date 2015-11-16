/**
 * Created by smcampbell on 11/5/2015.
 */
app.directive('photosInfo', function(){
    return{
        restrict: 'E',
        scope: {
            title: '@',
            info: '=',
            showFn: '&'
        },
        templateUrl: 'directives/photosInfo.html'
    };
});