module.controller("parentCtrl", parentCtrl)


// DI dependency injection - IOC
function parentCtrl($scope) {
    $scope.x=5
    this.x=7
}