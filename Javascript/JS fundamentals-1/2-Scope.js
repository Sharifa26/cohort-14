// Scope

// Block scope -- let,const

//Gobal scope
const age = 24;

function checkLegal(){
    //function scope -- var
    var canBuy = age >= 18;
    if(age > 18){
        // Block scope -- let,const
        var hey = "hello";
        let isLegal = true;
        console.log(isLegal,"is legal");
    }
    console.log(canBuy,"can buy");
    console.log(hey,"hey");
    
}

//console.log(canBuy);

checkLegal();