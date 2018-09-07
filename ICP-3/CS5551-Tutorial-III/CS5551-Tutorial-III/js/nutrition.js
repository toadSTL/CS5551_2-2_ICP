var app = angular.module( 'nutrtionModule',[]);

app.controller('nutritionController', function($scope, $http){
    $scope.getNutrition = function () {
        $http.get('https://api.nutritionix.com/v1_1/search/' + $scope.food + '?results=0:1&fields=*&appId=ebef0451&appKey=1fb3db833bdba1e32c1a474ce5e7c2c8').success(function(data) {
            //Below call to console.log() for debugging
            //console.log(data);
            $scope.calories=data.hits[0].fields.nf_calories;
            $scope.servingWt=data.hits[0].fields.nf_serving_weight_grams;

            //BELOW calls to console.log() for debugging
            //console.log($scope.food);
            //console.log($scope.calories);
            //console.log($scope.servingWt);
        })

    }

    $scope.textToSpeech = function(){
        var speech = new Audio( "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=53f0305f-8a97-4eda-8294-6d3a7cc24828&password=tUGiJiXidzJ6&text=" + $scope.food );
        speech.play();
    }
});

