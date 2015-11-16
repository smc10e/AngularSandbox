/**
 * Created by smcampbell on 11/5/2015.
 */
app.controller('PhotosController', ['$scope', function($scope){
    $scope.title = "Photos";
    $scope.show = "false";
    $scope.photos = [
        {
            name: 'Not afraid of the farmer look',
            src: 'content/pic1.jpg'
        },
        {
            name: 'One of the best people in the world',
            src: 'content/pic2.jpg'
        },
        {
            name: 'Best friend through and through',
            src: 'content/pic3.jpg'
        },
        {
            name: 'Caught off guard',
            src: 'content/pic4.jpg'
        },
        {
            name: 'Conquering the Grand Canyon',
            src: 'content/pic5.jpg'
        },
        {
            name: 'Zion National Park',
            src: 'content/zion1.jpg'
        }
    ];
    $scope.togglePic = function($scope){
        $scope.show = true;

    }
}]);