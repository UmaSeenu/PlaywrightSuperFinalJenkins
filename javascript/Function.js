// function sum(a,b){
//     return (a+b);

// }
// console.log(sum(2,4)); 

// //anonomous function --- a function without name

// let result=function (a,b){
//     return a+b;
// }

// console.log(result(5,5));

//let ,var 

function letexample(){
    let x=10;
    if(true){
        let x=15;
        //let y=5
    }
console.log(x);
//console.log(y);  // y is not declared because let scope is within the block where it is declared
}
letexample();

function varexample()
{
    var x=7;
    if(true)
    {
        var x=11
        console.log(x);  //11
    }
    console.log(x);//11
}

varexample();
