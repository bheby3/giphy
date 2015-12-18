/**
 * Created by brandonhebbert on 12/18/15.
 */
angular.module('app').controller('ctrl', function ($scope, DataService, myService) {

    $scope.addMessage = function (chatMessage) {

        DataService.getData(chatMessage)
            .then(function (response) {
                console.log(response, 'from controller');
                $scope.gifs = response; //now view can access response
                if(!response.length) $scope.noResults = true;
            })
            .catch(function (err) {
                console.warn(err);
            })
    }

    //DataService.getData(chatMessage)
    //    .then()

});

