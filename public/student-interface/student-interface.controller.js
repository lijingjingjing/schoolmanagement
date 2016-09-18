var studentInterface = angular.module('studentInterface');

studentInterface.controller('StudentInterfaceController', function($scope) {
    $scope.message = "Welcome to student interface.";
    $scope.id = localStorage.getItem('id');
    $scope.name = localStorage.getItem('name');
});