
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const newBtn = document.querySelector('#new-quote')





//get quote from api
async function getQuote() {
    try {
        const randomNumber = Math.trunc(Math.random() * 1643 + 1)
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        // console.log(data[randomNumber])
        quote.textContent = data[randomNumber].text;
        author.textContent = `~${data[randomNumber].author}`;
        // console.log(data[randomNumber].text);
    } catch (error) {
        console.log('whoops,no quote', error);
    }

}

getQuote();
newBtn.addEventListener('click', getQuote);


//on load
// getQuote();