var formLogin = angular.module('formLogin');

formLogin.controller('FormLoginController',function($scope,$http,$location){
    $scope.type = 'student';
    $scope.name = "";
    $scope.password = "";


    $scope.submit = function() {
        $http({
            method : 'POST',
            url : '/login',
            data : {
                name: $scope.name,
                password: $scope.password,
                type : $scope.type
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
            if($scope.type == 'student'){
                $location.path('/student');
                localStorage.setItem('id',response['data'].id);
                localStorage.setItem('name',response['data'].login_name);

            }else{
                $location.path('/teacher');
                localStorage.setItem('id',response['data'].id);
                localStorage.setItem('name',response['data'].login_name);
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.displayError =  true;
            console.log("got error",response);
        });
    }
});
