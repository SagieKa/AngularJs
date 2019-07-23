module.controller("childCtrl", childCtrl)


// DI dependency injection - IOC
function childCtrl($scope) {
    $scope.x=4
    this.x=6
}