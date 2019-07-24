
module.controller("SumCtrl", sumCtrl)

function sumCtrl($scope, dataService) {
        $scope.data = dataService
        $scope.getSumClass= ()=>{
           
            if($scope.data.color="green blue"){
                if($scope.data.a+$scope.data.b>=0)
                    return 'ok'
                 else
                    return'yellow'
                 
            }
            if($scope.data.color="blue brown"){
                if($scope.data.a+$scope.data.b>=0)
                    return 'gil'
                 else
                    return'brown'
                 
            }
       
        }
        
    }

