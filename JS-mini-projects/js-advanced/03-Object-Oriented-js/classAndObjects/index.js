class Video {
  constructor(title, duration, channelName, views, textColor) {
    this.title = title;
    this.duration = duration;
    this.channelName = channelName;
    this.views = views;
    this.textColor = textColor;
  }

  erase() {
    document.querySelectorAll("h1").forEach((elem) => {
        if(elem.style.color === this.textColor) {
            elem.remove()
        }
    });
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.textColor;
    document.body.append(h1);
  }
}

const video1 = new Video(
  "10 Days Challenge",
  "15 min",
  "Mr.Beast",
  "10 M",
  "orange"
);
const video2 = new Video(
  "Advance JS",
  "5 Hour",
  "Donald Trump",
  "100 M",
  "white"
);

const video3 = new Video(
  "DSA",
  "12 Hour",
  "BINGO",
  "1 M",
  "green"
);


video1.write("10 days surviving in Amazon");
video1.write("10 days surviving in Amazon");
video1.write("10 days surviving in Amazon");
video1.write("10 days surviving in Amazon");
video2.write("Advance JS, OOPS");
video2.write("Advance JS, OOPS");
video2.write("Advance JS, OOPS");
video2.write("Advance JS, OOPS");
video3.write('Data Structure and algorithm')
video3.write('Data Structure and algorithm')
video3.write('Data Structure and algorithm')
video3.write('Data Structure and algorithm')

video3.erase();