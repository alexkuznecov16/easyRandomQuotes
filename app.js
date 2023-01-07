let quoteBtn = document.getElementById('quoteBtn'); // add button variable


quoteBtn.addEventListener('click', (generator)); // make a event if user click to button
function generator(){
    // authors and quotes
    let quotes = {
        'Nelson Mandela' : '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        'Walt Disney' : '"The way to get started is to quit talking and begin doing."',
        'Steve Jobs' : '"Your time is limited, so dont waste it living someone else is life. Dont be trapped by dogma – which is living with the results of other people is thinking."',
        'Lou Holtz' : '"If you are bored with life you dont get up every morning with a burning desire to do things – you dont have enough goals."',
        'Jackson Brown' : '"Never give up on what you really want to do. The person with big dreams is more powerful than the one with all the facts."',
        'Oprah Winfrey' : '"Dream big – dream very big. Work hard – work very hard. And after you`ve done all you can, you stand, wait and fully surrender."',
        'Bill Gates' : '"The belief that the world is getting worse, that we can`t solve extreme poverty and disease, isn`t just mistaken. It`s harmful."',
        'Alexander Feldman' : '"Those who read books will always rule over those who watch TV."',
        'Steve Jobs' : '"Don`t let the noise of others` opinions drown out your own inner voice."',
        'Steve Jobs' : '"Im convinced that about half of what separates the successful entrepreneurs from the nonsuccessful ones is pure perseverance."',
        'Bill Gates' : '"I can understand wanting to have millions of dollars, there`s a certain freedom, meaningful freedom, that comes with that. But once you get much beyond that, I have to tell you, it`s the same hamburger."',
    }
    
    let authors = Object.keys(quotes); // find a keys("key" : "value") in quotes
    let author = authors[Math.floor(Math.random() * authors.length)]; // find random author(key) in quotes authors range
    let quote = quotes[author]; // find a quote thanks to author[INDEX]

    // add this quotes and authors to website
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}