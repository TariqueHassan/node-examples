var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for Rectangle with l= "+l+" and b="+b);

    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("Error: ", err.message);
        }
        else{
            console.log("The area of rectangle for dimensions l= "+l+" and b= "+b+" is: "+rectangle.area());
            console.log("The perimeter of rectangle for dimenstions l= "+l+" and b= "+b+" is: "+rectangle.perimeter());
        }
    });

    console.log("This statement after the call to rect()")
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,3);
solveRect(-4,3);