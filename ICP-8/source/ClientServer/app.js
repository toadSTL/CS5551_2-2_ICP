'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('ctrl', function ($scope, $http) {

        $scope.getEvents = function () {
            var month = document.getElementById("txt_month").value;
            var date = document.getElementById("txt_day").value;
            if (month != null && month != "" && date != null && date != "") {
                var handler = $http.get("http://numbersapi.com/"+ month +"/" + date + "/date?json");
                handler.success(function (data) {
                    if (data.found != null && data.found) {
                        console.log(data.text);
                        $scope.event = {
                            "discription": data.text,
                            "year": data.year,
                            "found": data.found
                        };
                    }
                    console.log($scope.event);
                });
                handler.error(function (data) {
                    alert("Error processing request. Please ensure that input fields are valid.");
                });
            }
        }
    });
