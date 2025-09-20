const Quotes = [
  // Teknologi & Inovasi
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates"
  },
  {
    quote: "It's easier to ask for forgiveness than it is to get permission.",
    author: "Grace Hopper"
  },
  
  // Sains & Pengetahuan
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein"
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
  },
  {
    quote: "Nothing in life is to be feared, it is only to be understood.",
    author: "Marie Curie"
  },

  // Motivasi & Kehidupan
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Whether you think you can, or you think you can't – you're right.",
    author: "Henry Ford"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },

  // Filsafat & Kebiasaan
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    quote: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu"
  }
];

const quoteText = document.getElementById('quotes')
const quoteAuthor = document.getElementById('author')
const newQuoteButton = document.getElementById('new-quotes')

function generatequotes(){
    const randomindex = Math.floor(Math.random() * Quotes.length);
    const randomQuotes = Quotes[randomindex]

quoteText.textContent = `"${randomQuotes.quote}"`
quoteAuthor.textContent = `-"${randomQuotes.author}"`
}

newQuoteButton.addEventListener("click", generatequotes)

generatequotes();