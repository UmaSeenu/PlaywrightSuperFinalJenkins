console.log("1st");
console.log("2nd");
console.log("3rd");
console.log("4th");
setTimeout(function ()
{

    console.log("This is a delayed message")
} , 2000);
 


console.log("5th");
console.log("6th");

console.log(5=='5'); //true because loose equality checks value only
console.log(5==='5'); // Output: false because strict equality checks type as well