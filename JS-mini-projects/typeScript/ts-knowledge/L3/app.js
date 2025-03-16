// A Student report card
// Assign type to student
var student = {
    studentId: 'Singg565',
    name: 'Taranjeet Singh',
    rollNumber: 11,
    class: "10 Grade",
    reports: [
        {
            subject: "Math",
            grade: "A",
            status: "Pass",
        },
        {
            subject: "Science",
            grade: "B",
            status: "Pass",
        },
        {
            subject: "English",
            grade: "C",
            status: "Pass",
        },
    ],
};
console.log("Student ID:", student.studentId);
console.log(student.name, student.class, student.rollNumber);
console.log(student.reports[0], student.reports[1], student.reports[2]);
