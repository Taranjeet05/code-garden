/* Question:
You are tasked with creating a train management system in JavaScript. The system should handle a train schedule and allow users to:

Add a train to the schedule.
Remove a train from the schedule.
List all trains with their arrival times.
Each train has:

A trainName (string),
An arrivalTime (string in the format "HH:mm"), and
A platformNumber (number).
Write a JavaScript class TrainSchedule that implements the following methods:

addTrain(trainName, arrivalTime, platformNumber) - Adds a new train to the schedule.
removeTrain(trainName) - Removes a train by its name.
listTrains() - Returns a list of all trains in the schedule. */

// Solution:

class TrainSchedule {
  constructor() {
    this.trains = [];
  }

  // Add a new train to the schedule
  addTrain(trainName, arrivalTime, platformNumber) {
    const newTrain = { trainName, arrivalTime, platformNumber };
    this.trains.push(newTrain);
    console.log(`Train "${trainName}" added successfully.`);
  }

  // Remove a train from the schedule by its name
  removeTrain(trainName) {
    const initialLength = this.trains.length;
    this.trains = this.trains.filter(train => train.trainName !== trainName);

    if (this.trains.length < initialLength) {
      console.log(`Train "${trainName}" removed successfully.`);
    } else {
      console.log(`Train "${trainName}" not found.`);
    }
  }

  // List all trains in the schedule
  listTrains() {
    if (this.trains.length === 0) {
      console.log("No trains in the schedule.");
      return [];
    }
    console.log("Current train schedule:");
    console.log(this.trains);
    return this.trains;
  }
}

// Example Usage
const schedule = new TrainSchedule();

// Add trains
schedule.addTrain("Express A", "10:30", 1);
schedule.addTrain("Express B", "11:00", 2);

// List trains
schedule.listTrains();

// Remove a train
schedule.removeTrain("Express A");

// List trains again
schedule.listTrains();
