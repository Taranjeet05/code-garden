const quotes = [
  // Bhagavad Gita Quotes
  "The soul is neither born, and nor does it die",
  "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions",
  "Change is the law of the universe. You can be a millionaire, or a pauper in an instant",
  "When meditation is mastered, the mind is unwavering like the flame of a candle in a windless place",
  "The mind is everything. What you think you become",
  "One who is not disturbed by the incessant flow of desires that enter like rivers into the ocean, which is being filled but is always being still, can alone achieve peace, and not the person who strives to satisfy such desires",
  "He who has conquered himself is a friend to himself",
  "In the practice of yoga, one can achieve perfection by selfless service and by cultivating an attitude of detachment",
  "There is neither this world, nor the world beyond, nor happiness for the one who doubts",
  "The greatest illusion in the world is the illusion of separation",
  "Even a small effort toward spiritual consciousness can protect one from the greatest danger",
  "The one who has control over his mind, his senses, and his actions, is the true yogi",
  "Self-realization is the process of realizing the true nature of oneself",
  "Act without attachment. Let not the fruits of action be your motive",
  "Be steadfast in your duty, O Arjuna. Renounce all attachment to success and failure",
  "The soul is eternal and imperishable; it is beyond birth and death",
  "He who has learned to control his mind and senses, and who is unaffected by pleasure and pain, is truly wise",
  "Knowledge is the ultimate path to freedom and liberation",
  "When you are free from the attachment to the results of your actions, you will find true contentment",
  "The key to success is to focus on goals, not obstacles",
  "A person is said to have attained yoga when he is skilled in acting without attachment",
  "True wisdom is to see all beings as equal, irrespective of their actions or appearances",
  "Yoga is the journey of the self, through the self, to the self",
  "The one who is disciplined and remains unaffected by worldly pleasures is a true yogi",
  "The power of the mind is the greatest force in the universe",

  // Guru Granth Sahib Ji Quotes
  "There is but One God, and He is the same everywhere",
  "Speak only that which will bring you honor",
  "He who has no faith in himself cannot have faith in God",
  "To be free from worldly attachments is the path to spiritual liberation",
  "True contentment is found within oneself, not in material possessions",
  "One who is absorbed in the divine name has transcended all fear and sorrow",
  "The greatest wealth is to live a simple life and have a contented heart",
  "Those who serve selflessly and humbly find eternal peace",
  "In the presence of the divine, the distinctions of caste, creed, and religion dissolve",
  "The divine light within us is the source of all true wisdom",
  "One who remembers God constantly is liberated from the cycle of birth and death",
  "The real pilgrimage is within; the real temple is the heart",
  "The true guru is the one who leads us to the realization of the divine within ourselves",
  "Wisdom is to see God in all beings, and all beings in God",
  "Service to others is the highest form of devotion to God",
  "Contentment is the greatest blessing one can receive",
  "True love is selfless and unconditional, free from worldly desires",
  "In the company of the holy, the mind is purified and the soul is enlightened",
  "To live a life of truth and righteousness is the path to divine grace",
  "In the divine presence, all sorrows are washed away, and true joy is found",
  "The divine essence is within all; recognize it, and you will find peace",
  "The path of righteousness is illuminated by the divine light within",
  "Simplicity and humility are the true ornaments of the soul",
  "In the service of others, one finds the true meaning of life",
  "The true purpose of life is to merge with the divine and realize the eternal truth"
];

const usedIndex = new Set();
const quoteElement = document.getElementsByClassName('Quote-paragraph')[0];

function generateQuote() { 

  if (usedIndex.size >= quotes.length) {
    usedIndex.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndex.has(randomIdx)) continue
    const quote = quotes [randomIdx]
    quoteElement.innerHTML = quote;
    usedIndex.add(randomIdx)
    break
  }
  }
 




document.getElementsByClassName('Generator-btn')[0].addEventListener('click', function () {
  generateQuote();
})
