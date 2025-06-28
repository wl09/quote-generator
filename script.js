let apiQuotes = [];

// Get Quotes API

async function getQuotes() {
    const apiURL ='https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiURL);
        apiQuotes= await response.json();
        console.log(apiQuotes[12]);
    } catch(error) {
    // Catch error Here

    }

}


// On Load

getQuotes();