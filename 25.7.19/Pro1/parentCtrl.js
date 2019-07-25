
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope, $http, $q ,dataService,globalConst,serviceService) {
    $scope.id_view={
        num:-1
    }
    
    $scope.todos = dataService
    

    let url = globalConst.url
    serviceService.getGet(url);
    
    $scope.A= () => {
        
        serviceService.getGetNum(url,$scope.id_view.num)
        $scope.view = $scope.todos.itemsNum
        console.log($scope.view)



    }


}
