 var app = angular.module('ArrayExample', []);

app.controller('myController', function($scope) {
    $scope.names = [
        {firstname:'Ravi kiran',   lastname:'Yadavalli' , country:'India'},
        {firstname:'John',      lastname:'Doe' ,           country:'USA'},
        {firstname:'Pradyumna', lastname:'Doddala',        country:'India'},
        {firstname:'Xing',      lastname:'Wong',           country:'China'},
        {firstname:'Ragunandan Rao',   lastname:'Malangully' , country:'India'},
        {firstname:'Guru',      lastname:'Mannava',        country:'India'},
        {firstname:'Tony',      lastname:'Williams' ,      country:'USA'}
    ];
        
        $scope.fullName= function(first, last) {
            return last + " " + first;
        }
        
    });
        