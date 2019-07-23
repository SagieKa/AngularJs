
module.controller("parentCtrl", ParentCtrl)


function ParentCtrl($scope, $rootScope) {
 
    $scope.change=''
    $scope.x=''
    $rootScope.countP=0
    $scope.numClick=-1;
    $scope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})

    ]
    $rootScope.countP=4
    $scope.Add=()=>{
        console.log("Add")
        $rootScope.countP++;
        $scope.devices.push({model: $scope.model, color: $scope.color, price: $scope.price})
        
    }
    $scope.Update= ()=>{
        console.log("Update")
        $scope.devices[$scope.id].model= $scope.model
        $scope.devices[$scope.id].color= $scope.color
        $scope.devices[$scope.id].price= $scope.price
    }
    $scope.click=(a)=>{
        console.log(a)
        $rootScope.countP--;
        $scope.devices.splice(a, 1)
        

    }
    $scope.Model=()=>{
        console.log("hi i am model")
        $scope.change='model'

        

    }
    $scope.Color=()=>{
        console.log("hi i am color")
        $scope.change='color'
        

    }
    $scope.Price=()=>{
        console.log("hi i am price")
        $scope.change='price'
        $scope.x='price'
        

    }

    
}
