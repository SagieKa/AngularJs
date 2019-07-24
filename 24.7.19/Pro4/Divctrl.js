
module.controller("DivCtrl", divCtrl)

function divCtrl($scope, dataService) {
        $scope.data = dataService
        $scope.getDivClass= ()=>{
            if($scope.data.b==0){
                //alert('eror')
                return 'missing'
                
            }
        }
        
    }

