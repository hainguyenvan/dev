const app = angular.module('appChatDemo', []);
app.controller('ctrlChatDemo', function($scope, $http, $window) {

    $scope.isLogin = false;

    $scope.onInit = function() {
        console.log('init data');
    }

    $scope.onSignIn = function() {
        $scope.isLogin = true;
    }

});