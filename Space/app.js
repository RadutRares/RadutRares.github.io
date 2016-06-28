// Code goes here

var app = angular.module("Space",[])

var MainController = function ($scope, $http){
  $http.get('Weapons.json').success(function(data) {
    $scope.base = data;
  });
  $scope.HideProd = false;
  $scope.HideSpec = false;
  $scope.HideRace = true;
  $scope.OrderMethod = "Default";
};

app.controller("MainController", ["$scope", "$http", MainController]);