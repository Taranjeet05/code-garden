const students = [
  { firstName: "Taranjeet", lastName: "Singh", marks: 85 },
  { firstName: "Aman", lastName: "Verma", marks: 35 },
  { firstName: "Neha", lastName: "Kaur", marks: 60 },
  { firstName: "Rohan", lastName: "Das", marks: 25 },
  { firstName: "Simran", lastName: "Gill", marks: 75 },
];

// Step 1: Filter students who passed
const passedStudents = students.filter((student) => student.marks >= 40);
console.log(passedStudents)

// Step 2: Map to a new array with fullName and grade
const studentResults = passedStudents.map((student) => {
  const fullName = `${student.firstName} ${student.lastName}`;
  let grade = "";

  if (student.marks >= 80) grade = "A";
  else if (student.marks >= 60) grade = "B";
  else grade = "C";

  return {
    fullName,
    marks: student.marks,
    grade,
  };
});

console.log(studentResults);
