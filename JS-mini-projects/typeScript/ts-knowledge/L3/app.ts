//                               A Student Report Card

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

console.log(`Student ID:`, student.studentId);
console.log(student.name, student.class, student.rollNumber);
console.log(student.reports[0], student.reports[1], student.reports[2]);

//                                🗳️ Voting App

type party = "BJP" | "Congress" | "Aap";
type VotingStatus = "voted" | "not-voted";

type Candidate = {
  name: string;
  party: party;
};

type Voter = {
  voterId: string | number;
  firstName: string;
  lastName: string;
  candidate: Candidate[];
  votingStatus: VotingStatus;
  votedFor: party;
};

const voter: Voter = {
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

function hasVoted (voter : Voter) {
  if(voter.votingStatus === 'voted'){
    alert(`Thanks for Taking part in voting.`)
    alert(`You voted for ${voter.votedFor}`)
    console.log('Thanks for voting', voter.votedFor)
  }else{
    alert(`Democracy will stay healthy if you vote for the country.`)
    alert(`Your voting status is > ${voter.votingStatus}`)
    console.log(voter.votingStatus);
  }
}

hasVoted(voter)