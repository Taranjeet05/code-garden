// A Student report card

// Literal Types using Union
type Subject = "Math" | "Science" | "English";
type Status = "Pass" | "Fail";
type Grade = "A" | "B" | "C" | "D" | "E" | "F";

// Type Alias
type Reports = {
  subject: Subject;
  grade: Grade;
  status: Status;
};

// Type Alias + Union Type
type Student = {
  studentId: number | string;
  name: string;
  rollNumber: number;
  class: string;
  reports: Reports[];
};

// Assign type to student
const student: Student = {
  studentId: 'Singg565' ,
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

console.log(`Student ID:`,student.studentId);
console.log(student.name , student.class, student.rollNumber);
console.log(student.reports[0], student.reports[1], student.reports[2])