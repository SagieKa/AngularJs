module.controller("ACtrl", ACtrl)

function ACtrl($scope, dataService,apiService) {
        $scope.AA=''
        $scope.data = dataService
        
        $scope.A =function(){
            $scope.AA=apiService.getlist($scope.data.a)}

        
    }
