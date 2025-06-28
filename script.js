const quoteContainer = document.getElementById('quote-container');
const quotetext = document.getElementById('quote');
const authortext = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('quote-container');

let apiQuotes = [];

// Show New Quote

function newQuote() {
    //Pick a random quote for apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes API

async function getQuotes() {
    const apiURL ='https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiURL);
        apiQuotes= await response.json();
        newQuote();
    } catch(error) {
    // Catch error Here

    }

}


// On Load

getQuotes();