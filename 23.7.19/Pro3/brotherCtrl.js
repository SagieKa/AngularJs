module.controller("brotherCtrl", brotherCtrl)


function brotherCtrl($scope,$rootScope){
    $scope.res=$rootScope.val
    $scope.flag=0
    $scope.click5= ()=>{
        if($scope.flag==0)
        {$scope.flag=1}
        else{
            $scope.flag=0
        }
    }

}