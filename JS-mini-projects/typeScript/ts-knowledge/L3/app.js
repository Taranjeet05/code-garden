//                               A Student Report Card
// Assign type to student
var student = {
    studentId: "Singg565",
    name: "Taranjeet Singh",
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
var voter = {
    voterId: "H2R45TT5",
    firstName: "Taranjeet",
    lastName: "Singh",
    candidate: [
        {
            name: "Narender Modi",
            party: "BJP",
        },
        {
            name: "Rahul Gandhi",
            party: "Congress",
        },
        {
            name: "Kejriwal",
            party: "Aap",
        },
    ],
    votingStatus: "voted",
    votedFor: "BJP",
};
console.log(voter.firstName, voter.lastName);
console.log(voter.votedFor);
function hasVoted(voter) {
    if (voter.votingStatus === 'voted') {
        alert("Thanks for Taking part in voting.");
        alert("You voted for ".concat(voter.votedFor));
        console.log('Thanks for voting', voter.votedFor);
    }
    else {
        alert("Democracy will stay healthy if you vote for the country.");
        alert("Your voting status is > ".concat(voter.votingStatus));
        console.log(voter.votingStatus);
    }
}
hasVoted(voter);
