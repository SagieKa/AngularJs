module.service("serviceService", function(apiService, globalConst) {
    
    this.myname = 'cool service!'

    this.getUpper = function(s) { 
        return s.toUpperCase()
    }
})