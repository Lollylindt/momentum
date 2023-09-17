const quotes = [
{
    quote: "You complete me.",
    author: "Jerry Maguire",
},
{
    quote: "I'm scared of walking out of this room and never feeling the rest of my whole life the way I feel when I'm with you.",
    author: "Dirty Dancing",
},
{
    quote: "To me, you are perfect.",
    author: "Love Actually",
},
{
    quote: "Our love is like the wind. I can't see it, but I can feel it.",
    author: "A Walk to Remember",
},
{
    quote: "People do fall in love. People do belong to each other, because that's the only chance that anyone's got for true happiness.",
    author: "Breakfast at Tiffany's",
},
{
    quote: "Medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.", 
    author: "Dead Poets Society",
},
{
    quote: "I'd rather die tomorrow than live a hundred years without knowing you.",
    author: "Pocahontas",
},
{
    quote: "You're my air.",
    author: "Brown Sugar",
},
{
    quote: "I wish I knew how to quit you.",
    author: "Brokeback Mountain",
},
{
    quote: "Remember love is what brought you here.",
    author: "If Beale Street Could Talk",
} ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;