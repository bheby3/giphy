/**
 * Created by brandonhebbert on 12/18/15.
 */
angular.module('app').factory('DataService', function($http, $q) {
    var service = {};

    service.getData = function (searchString) {

        //console.log(searchString, 'from my service');

        var url = "http://api.giphy.com/v1/gifs/search?q=" + searchString + "&api_key=dc6zaTOxFJmzC"; //concat string and put in seach string
        //
        var deferred = $q.defer();
        $http.get(url)
            .then(function (response) {
                if(response.data.data) {
                    var parsedArray = response.data.data.splice(0, 5);
                    deferred.resolve(parsedArray);//resolve the promise and pass the parsedArray back to ctrl getData and trigger .then
                    //if successful and second .then if error.
                } else {
                    var parsedArray
                }
            }).then(function (err) {
                deferred.reject(err);
        })

        return deferred.promise;

        
        
        //returns a promise.
        //    .success(function(response){
        //        console.log(response.data);
        //    })
        //    .catch(function(error){
        //        console.error(error.data);
        //    });

    };

    return service;
})