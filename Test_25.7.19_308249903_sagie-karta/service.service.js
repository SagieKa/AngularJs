module.service("serviceService", function( dataService,$http) {
    this.arr = dataService
    
    
    

this.A1= function() {
      
       dataService.X1=dataService.X1_val
}
  this.A2=function() {
  
        dataService.X2=dataService.X2_val
}
  this.A3= function() {
  
    dataService.X3=dataService.X3_val
}
  this.A4= function() {
  
    dataService.X4=dataService.X4_val
}
  this.A5= function() {
  
    dataService.X5=dataService.X5_val
}
  this.A6= function() {
  
    dataService.X6=dataService.X6_val
}
this.order=function(){
    
    dataService.X1_val =dataService.itemsNum.pop()
    dataService.X2_val =dataService.itemsNum.pop()
    dataService.X3_val =dataService.itemsNum.pop()
    dataService.X4_val =dataService.itemsNum.pop()
    dataService.X5_val =dataService.itemsNum.pop()
    dataService.X6_val =dataService.itemsNum.pop()
    

}

this.isEmpty=function(){
    console.log('hi empty')
    dataService.X1='X'
    dataService.X2='X'
    dataService.X3='X'
    dataService.X4='X'
    dataService.X5='X'
    dataService.X6='X'
}
  this.iscount= function(a,b) {
    console.log(dataService.count)
        dataService.count++;
      console.log(dataService.count)

      if(dataService.count==2)
      {
            dataService.cheak2=a;
            if(dataService.cheak2==dataService.cheak1)
        {
                dataService.countG++;
                dataService.countC++;
                

        }
            else
        {

            dataService.countC++;
        }
        
            dataService.count=0
            dataService.cheak1=-1
            dataService.cheak1=-2
            
    }
      if(dataService.count==1){
        dataService.cheak1=a
      }

}
})