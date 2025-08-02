let obj={
    name: "John",
    age: 30,
    city: "New York"
}

console.log(obj.name); // Output: John
console.log(obj); // Output: 30

let strigiedobject = JSON.stringify(obj);
console.log(strigiedobject); 
console.log(strigiedobject.name);// Output: undefined

let finaljsobj=JSON.parse(strigiedobject);
 // Output: { name: 'John', age: 30, city: 'New York' }
 console.log(finaljsobj.name); // Output: John

 let person= {
    name: "Jane",
    age: 25,
    city: "Los Angeles"}
console.log('gender' in person); // Output: false because gender doesn't exist in person

for (let key in person) {
    console.log(`${key}: ${person[key]}`); //output name: Jane age: 25 city: Los Angeles
}

let person2 = {
    first: "Alice",
    last: "Smith",
    age: 28,
    city: "San Francisco",
    fullName: function() {
        return `${this.first} ${this.last}`;    // or this.first+this.last
    }
}
console.log(person2.fullName()); // Output: Alice Smith