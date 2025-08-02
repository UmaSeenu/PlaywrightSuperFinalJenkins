const students=[ {
    name: 'John',   
    score:34
}  ,
{    name: 'Jane',
    score: 45},
{
    name: 'Alice',
    score: 50
} ,
{
    name: 'Bob',
    score: 60
} ,
{
    name: 'Charlie',
    score: 30
} ,
{
    name: 'David',
    score: 80
} ,
{
    name: 'Eve',
    score: 90
} ,
{
    name: 'Frank',
    score: 95
} ,
{
    name: 'Grace',
    score: 100
}
 ]

 const passedstudents=students.filter((student) => student.score >= 36);
console.log(passedstudents); // Output: Array of students with score >= 36

const uperstudent=passedstudents.map((student) => (student.name.toUpperCase()));
console.log(uperstudent); // Output: Array of student names in uppercase


const totalScore = passedstudents.reduce((accumulator, student) => (accumulator + student.score), 0);
    
console.log(totalScore); // Output: Total score of all passed students
