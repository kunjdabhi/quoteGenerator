const quoteContainer = document.querySelector('#quote-container')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const newBtn = document.querySelector('#new-quote')

const tweet = document.querySelector('#twitter');
const loader = document.querySelector('#loader');

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    if (!loader.hidden) {
        loader.hidden = true;
        quoteContainer.hidden = false;
    }
}


//get quote from api
async function getQuote() {
    try {
        loading();
        const randomNumber = Math.trunc(Math.random() * 1643 + 1)
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        console.log(data)
        // console.log(data[randomNumber])
        // console.log(data[randomNumber].author)
        quote.textContent = data[randomNumber].text;

        if (!data[randomNumber].author) {
            author.textContent = '~Unknown';
        }
        else
            author.textContent = `~${data[randomNumber].author}`;
        // console.log(data[randomNumber].text);
        complete()
    } catch (error) {
        console.log('whoops,no quote', error);
    }

}

function tweetQuote() {
    const quoteText = quote.innerText;
    const authorText = author.innerText;
    const twitterUrl = `http://twitter.com/intent/tweet?text=${quoteText} - ${authorText}`;

    window.open(twitterUrl, '_blank')
}

newBtn.addEventListener('click', getQuote);

tweet.addEventListener('click', tweetQuote);


//on load
getQuote();
// getQuote();