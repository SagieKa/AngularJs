
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope ,$http,dataService,serviceService) {
    $scope.x=dataService
    $scope.x1C=0
    $scope.x2C=0
    $scope.x3C=0
    $scope.x4C=0
    $scope.x5C=0
    $scope.x6C=0
    $scope.count=0
    

    serviceService.order();

    console.log("the val:"+$scope.x.X1_val)

      $scope.A1= () => {
          serviceService.A1()
          serviceService.iscount($scope.x.X1_val)
          
    }
      $scope.A2= () => {
            serviceService.A2()
          
            serviceService.iscount($scope.x.X2_val)}
      $scope.A3= () => {serviceService.A3()
        serviceService.iscount($scope.x.X3_val)
    }
      $scope.A4= () => {serviceService.A4()
        serviceService.iscount($scope.x.X4_val)
    }
      $scope.A5= () => {serviceService.A5()
        serviceService.iscount($scope.x.X5_val)
    }
      $scope.A6= () => {serviceService.A6()
        serviceService.iscount($scope.x.X6_val)}
    
      $scope.Back= () => {
        $scope.x.X1='X'
        $scope.x.X2='X'
        $scope.x.X3='X'
        $scope.x.X4='X'
        $scope.x.X5='X'
        $scope.x.X6='X'
    }


}
      
