class Person{
     age= 30;
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    getFullName() {
        return (this.firstName + " " + this.lastName);
        ;
    }
}

module.exports = Person;