module.controller("parentCtrl", parentCtrl)


// DI dependency injection - IOC
function parentCtrl($scope,$rootScope) {
    $scope.x1=''
    $scope.$watch('x1', function(newx,old){
        if(newx=='sagie'){
            setTimeout(sagie(),20000000)
            function sagie(){alert('is ssssssssssssssssagie!!!!!')}
        }
        console.log(`hello+${newx} + ${old}`)
    })
}
    //$scope.$watch('x1', function(newX, old) {
        //console.log(`old x = ${old} new x = ${newX}`)}
    
