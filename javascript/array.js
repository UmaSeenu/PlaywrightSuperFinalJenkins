
let marks= [10, 20, 30, 40, 50];
console.log(marks.length); // Output: 5
console.log(marks[0]); // Output: 10

marks.push(100);    // to add element at the end of array
console.log(marks); // Output: [10, 20, 30, 40, 50, 100]

marks.pop();
console.log(marks); // Output: [10, 20, 30, 40, 50]
console.log(marks.indexOf(30)); // Output: 2
console.log(marks.includes(60)); // Output: false       
marks.shift(); // to remove first element
console.log(marks); // Output: [20, 30, 40, 50]
marks.unshift(5); // to add element at the beginning
console.log(marks); // Output: [5, 20, 30, 40,50]
console.log(marks.slice(1, 3)); // Output: [20, 30

console.log(marks.slice(1)); // Output: [20, 30, 40, 50]

let marks2 = [60, 70, 80, 33,22,11];

let evenarr=[];
for (let i = 0; i < marks2.length; i++) {
    if(marks2[i] % 2 === 0) {
        evenarr.push(marks2[i]);
    }
}
console.log(evenarr); // Output: [60, 70, 80,22
console.log(marks2.filter((mark) => (mark%2==0))); // Output: [40, 50, 100]nu

let sum=0;
for (let i = 0; i < marks2.length; i++) {
    sum += marks2[i];
}
console.log(sum); // Output: 273

console.log(marks2.reduce((sum,sumnew) => sum + sumnew, 0)); // Out

console.log(marks2.map((mark)=>mark * 2)); // Output: [120, 140, 160, 66, 44, 22]


let fruits = ['apple','pomogranate', 'banana', 'cherry'];
console.log(fruits.sort()); // Output: ['apple', 'banana', 'cherry', 'pomogranate']
console.log(fruits.reverse()); // Output: ['pomogranate', 'cherry', 'banana', 'apple']
console.log(fruits.join(' - ')); // Output: 'apple - pomogranate - banana - cherry'
console.log(fruits.toString()); // Output: 'apple,pomogranate,banana,cherry'
console.log(fruits.includes('banana')); // Output: true
console.log(fruits.indexOf('banana')); // Output: 2

let numbers = [1, 2, 6,7,3, 4, 5];
console.log(numbers.sort((a, b) => a - b)); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(numbers.sort((a, b) => b - a)); // Output: [7