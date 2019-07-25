module.service("serviceService", function( dataService,$http) {
    this.arr = dataService
    
    
    

    this.getGet = function(url) { 
        let p = $http.get(url)
        p.then( (resp) => {
            // happens in the future - when the responsee will come back!
    
            console.log(resp.data)
    
            this.arr.items = resp.data
    
        }, (err) => {
            console.log(`ERROR === ${err}`)   
        }
        )
    }
    this.getGetNum = function(url,num) { 
        console.log(url+"/"+num)
        let p = $http.get(url+"/"+num)
        p.then( (resp) => {
        //console.log(resp.data)
        this.arr.itemsNum = resp.data
    
        }, (err) => {
            console.log(`ERROR === ${err}`)   
        }
        )
    }
})