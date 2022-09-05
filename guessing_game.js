for(var i=1;i<=10;i++){
    var h=require("readline-sync")
    var guess=h.questionInt("enter the num:")
    if (guess==10){
        console.log("congress! you won!")
        break
    }
    else{
        console.log('try again!')
        break
    }    
}
console.log("Thank you!")