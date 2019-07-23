module.controller("childCtrl", childCtrl)


// DI dependency injection - IOC
function childCtrl($scope) {
$scope.resultson=$scope.$parent.result
$scope.click6= ()=>{
    $scope.resultson=$scope.$parent.result
}
}