/**
 * Created by smcampbell on 11/5/2015.
 */
app.controller('PhotosController', ['$scope', function($scope){
    $scope.title = "Photos";
    $scope.display = "";
    $scope.popupsrc = "";
    $scope.photos = [
        {
            description: 'Not afraid of the farmer look',
            src: 'content/pic1.jpg'
        },
        {
            description: 'One of the best people in the world',
            src: 'content/pic2.jpg'
        },
        {
            description: 'Best friend through and through',
            src: 'content/pic3.jpg'
        },
        {
            description: 'Caught off guard',
            src: 'content/pic4.jpg'
        },
        {
            description: 'Conquering the Grand Canyon',
            src: 'content/pic5.jpg'
        },
        {
            description: 'Zion National Park',
            src: 'content/zion1.jpg'
        }
    ];
    $scope.showFn = function(src){
        if($scope.display === "true"){
            $scope.display = "false";
            $scope.popupsrc = "";
        }
        else{
            $scope.display = "true";
            $scope.popupsrc = src;
        }
    };
}]);