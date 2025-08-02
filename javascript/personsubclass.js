const Person=require('./Person.js')

class personsubclass extends Person {
    constructor(first, last, age) {
        super(first, last); // Call the parent class constructor
        this.age = age; // Add a new property specific to the subclass
    }

    getAge() {
        return this.age; // Method to get the age of the person
    }
}  

const personsubclass = new personsubclass('Jane', 'Doe', 25);
console.log(personsubclass.getFullName()); // Output: Jane Doe