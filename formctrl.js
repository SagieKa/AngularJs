// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("formctrl", FormCtrl)


// DI dependency injection - IOC
function FormCtrl($scope) {

    
    $scope.person = new Person('')
    $scope.name = '';
    $scope.age = '';
    $scope.password = '';
    $scope.gender = '';
    $scope.car = '';
    $scope.bike = '';
    console.log($scope.person)
    $scope.resetName = function() {
        console.log($scope.person)
    }

}

class Person
{
    constructor(name,age,password,gender,car,bike)
    {
        this.name = name
        this.age=age
        this.password=password
        this.gender=gender
        this.car=car
        this.bike=bike
    }
}