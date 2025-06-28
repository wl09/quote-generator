const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

newQuoteBtn.addEventListener('click', newQuote);

let apiQuotes = [];

// Show New Quote

function newQuote() {
    //Pick a random quote for apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent= quote.author ; /* object.objectproperty */
    quoteText.textContent = quote.text;
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
