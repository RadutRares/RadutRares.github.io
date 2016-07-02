var app = angular.module("Space", []);

var ArmorGet = function ($scope, $http){
  $http.get('Armor.json').success(function(data) {
    $scope.armors = data;
  });
  $scope.HideProd = false;
  $scope.HideSpec = false;
  $scope.HideRace = true;
  $scope.OrderMethod = "Default";
};

app.controller("ArmorGet", ArmorGet);
