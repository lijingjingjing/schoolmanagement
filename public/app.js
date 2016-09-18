var app = angular.module('app',['ngRoute','formLogin','studentInterface','teacherInterface']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'form-login/form-login.template.html',
            controller : 'FormLoginController'
        })

        .when('/student', {
            templateUrl : 'student-interface/student-interface.template.html',
            controller : 'StudentInterfaceController'
        })

        .when('/teacher', {
            templateUrl : 'teacher-interface/teacher-interface.template.html',
            controller : 'TeacherInterfaceController'
        })

        .otherwise({redirectTo: '/'});
});
