module.controller("parentCtrl", parentCtrl)


// DI dependency injection - IOC
function parentCtrl($scope,$rootScope) {
    $scope.tav='+'
    $scope.result=0
    $rootScope.val=$scope.result
    $scope.click1= ()=>{
        $scope.result=parseInt($scope.x1)+parseInt($scope.x2)
        $rootScope.val=$scope.result
        $scope.tav='+'
    }
    $scope.click2= ()=>{
        $scope.result=$scope.x1-$scope.x2
        $rootScope.val=$scope.result
        $scope.tav='-'
    }
    $scope.click3= ()=>{
        $scope.result=$scope.x1*$scope.x2
        $rootScope.val=$scope.result
        $scope.tav='*'
    }
    $scope.click4= ()=>{
        $scope.result=$scope.x1/$scope.x2
        $rootScope.val=$scope.result
        $scope.tav='/'
    }
   
}