enum Party {
  BJP = "BJP (Bhartiya Janta Party)",
  CONGRESS = "congress",
  Aap = "Aap",
}

type BirthPlace = [city: string, state: string, country: string];

type RoleModel = [
  name: string,
  contribution: string,
  born: number,
  deid: number,
  state: string,
  Indian: boolean
];

type FavouritePlaces = {
  Delhi: string[];
  Punjab: string[];
  UttarPradesh: string[];
  Maharashtra: string[];
};

type NicePoliticiansOfIndia = {
  name: string;
  party: Party;
};

type Education = {
  school: string;
  completed: boolean;
  currentlyStudying: string;
};

type Person = {
  name: string;
  age: number;
  birthPlace: BirthPlace;
  hobbies: string[];
  favouritePlaces: FavouritePlaces;
  nicePoliticiansOfIndia: NicePoliticiansOfIndia[];
  education: Education;
  languagesSpoken: string[];
  dreamDestinations: string[];
  inspirationalFigures: RoleModel[];
  skills: string[];
  lifeGoal: string;
};

const person: Person = {
  name: "Taranjeet Singh",
  age: 20,
  birthPlace: ["Urmar Tanda", "Punjab", "India"],
  hobbies: [
    "Geopolitics",
    "Playing Cricket",
    "History",
    "Geography",
    "Civics",
    "Indian Politics",
  ],
  favouritePlaces: {
    Delhi: [
      "Connaught Place",
      "India Gate",
      "Red Fort",
      "Rashtrapati Bhavan",
      "Parliament of India",
    ],
    Punjab: ["Amritsar", "Jalandhar", "Mohali", "Hoshiarpur", "Ludhiana"],
    UttarPradesh: ["Prayagraj", "RAM Mandir", "Varanasi", "Lucknow"],
    Maharashtra: ["Mumbai", "Gateway of India", "Film City", "Taj Hotel"],
  },
  nicePoliticiansOfIndia: [
    {
      name: "Narendra Modi",
      party: Party.BJP,
    },
    {
      name: "Amit Shah",
      party: Party.BJP,
    },
    {
      name: "Yogi Adityanath",
      party: Party.BJP,
    },
    {
      name: "Rajnath Singh",
      party: Party.BJP,
    },
  ],
  education: {
    school: "Robert Koch Schule, Frankfurt",
    completed: true,
    currentlyStudying: "Full-Stack Web Development Bootcamp",
  },
  languagesSpoken: ["Punjabi", "Hindi", "English", "German"],
  dreamDestinations: ["Kashmir", "Switzerland", "Japan", "London", "Goa"],
  inspirationalFigures: [
    [
      "Dr. B.R. Ambedkar",
      "Constitution Maker & Social Reformer",
      1891,
      1956,
      "Maharashtra",
      true,
    ],
    [
      "Swami Vivekananda",
      "Spiritual Leader & Youth Icon",
      1863,
      1902,
      "West Bengal",
      true,
    ],
    [
      "Subhash Chandra Bose",
      "Indian Freedom Fighter",
      1897,
      1945,
      "Odisha",
      true,
    ],
    [
      "APJ Abdul Kalam",
      "Scientist & Former President of India",
      1931,
      2015,
      "Tamil Nadu",
      true,
    ],
    [
      "Bhagat Singh",
      "Freedom Fighter & Revolutionary",
      1907,
      1931,
      "Punjab",
      true,
    ],
    [
      "Sukhdev Thapar",
      "Freedom Fighter & Revolutionary",
      1907,
      1931,
      "Punjab",
      true,
    ],
    [
      "Rajguru",
      "Freedom Fighter & Revolutionary",
      1908,
      1931,
      "Maharashtra",
      true,
    ],
    ["Lala Lajpat Rai", "Freedom Fighter & Leader", 1865, 1928, "Punjab", true],
    [
      "Chandra Shekhar Azad",
      "Revolutionary & Freedom Fighter",
      1906,
      1931,
      "Uttar Pradesh",
      true,
    ],
    [
      "Sardar Vallabhbhai Patel",
      "Freedom Fighter & Iron Man of India",
      1875,
      1950,
      "Gujarat",
      true,
    ],
    [
      "Jawaharlal Nehru",
      "Freedom Fighter & First Prime Minister of India",
      1889,
      1964,
      "Uttar Pradesh",
      true,
    ],
    [
      "Mahatma Gandhi",
      "Leader of Indian Independence Movement",
      1869,
      1948,
      "Gujarat",
      true,
    ],
    [
      "Ram Prasad Bismil",
      "Revolutionary & Freedom Fighter",
      1897,
      1927,
      "Uttar Pradesh",
      true,
    ],
    [
      "Khudiram Bose",
      "Young Freedom Fighter & Martyr",
      1889,
      1908,
      "West Bengal",
      true,
    ],
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Communication",
    "Teamwork",
  ],
  lifeGoal:
    "To build digital solutions that make education accessible for all - especially disabled children.",
};

console.log(person.favouritePlaces.Delhi);
console.log(person.skills);
console.log(person.lifeGoal);
console.log(person.birthPlace[0], person.birthPlace[1], person.birthPlace[2]);
console.log(person.nicePoliticiansOfIndia);
console.log(person.inspirationalFigures[1]);
console.log(person.inspirationalFigures);
