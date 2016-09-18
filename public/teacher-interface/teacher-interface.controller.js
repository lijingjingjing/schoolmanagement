var teacherInterface = angular.module('teacherInterface');

teacherInterface.controller("TeacherInterfaceController",function($scope){
    $scope.message = "Welcome to teacher Interface.";
    $scope.id = localStorage.getItem('id');
    $scope.name = localStorage.getItem('name');
});