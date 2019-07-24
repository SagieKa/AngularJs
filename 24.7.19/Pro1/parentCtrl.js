
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {
    $scope.numID=0
    $scope.numEmail=0
    $scope.numAge=0
    $scope.email = ''
    $scope.name = ''
    $scope.age= ''
    $scope.getClassName = function() {
        if ($scope.name == '' )
            $scope.numID=0
        else{$scope.numID=1}
    }
    $scope.getClassEmail = function() {
        if ($scope.email == '' )
            $scope.numEmail=0
        else{$scope.numEmail=1}
    }
    $scope.getClassAge = function() {
        if ($scope.age=='')
            $scope.numAge=0
        else if ($scope.age<18 )
            $scope.numAge=9
         else if ($scope.age>=18 )
            $scope.numAge=1
    }
    $scope.all_ok = function() {
        
        if (($scope.numID+$scope.numEmail+$scope.numAge)==0)
            { return 'missing'}
        if((($scope.numID+$scope.numEmail+$scope.numAge)==2)||(($scope.numID+$scope.numEmail+$scope.numAge)==1) ) 
        { return 'helek'}
        if(($scope.numID+$scope.numEmail+$scope.numAge)==11) 
        {return 'gil'}
        if(($scope.numID+$scope.numEmail+$scope.numAge)==3) {
            return 'ok'}
    }
    $scope.ok = function() {
            console.log ("num="+$scope.numID)
            console.log ("email="+$scope.numEmail)
            console.log ("age="+$scope.numAge)
    }
}
