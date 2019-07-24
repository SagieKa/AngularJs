const mythreeModule = angular.module("mythreemodule", [])

mythreeModule.controller("Hello2", Hello2Ctrl);

function Hello2Ctrl($scope){
    $scope.message="Hello module 2 "
}