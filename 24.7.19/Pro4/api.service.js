module.factory("apiService", function() {
    const result1 = []
    const result2 = []
    var x
    
    result = {}

    result.getlist= function (x) {
        if(x<0){
            alert("eror")
        }
        else{
            num=1
            result1.push(num)
            num++
            
            while(num!=x){
                result1.push(num)
                num++
            }
            result1.push(x)
            return result1
        }
    
        
    }
    
    result.getlistrev= function (x) {
        if(x<0){
            alert("eror")
        }
        else{
            result2.push(x)
            x--
            while(x!=0){
                result2.push(x)
                x--
            }
            return result2

            
        }
        
    }

    return result
})