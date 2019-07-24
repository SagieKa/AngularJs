module.controller("BCtrl", BCtrl)

function BCtrl($scope, dataService,apiService) {
        $scope.BB=''
        $scope.data = dataService
        
        $scope.B =function(){
            $scope.BB=apiService.getlistrev($scope.data.b)}

        
    }
