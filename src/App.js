import React, {useState, useEffect} from "react";
import randomcolor from 'randomcolor'
import tumblr from './img/tumblr.png'


function App() {

  const [quotes] = useState([
    {
      quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author:"Nelson Mandela",
    },
    {
      quote:"The way to get started is to quit talking and begin doing.",
      author:"Walt Disney",
    },
    {
      quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      author:"Steve Jobs",
    },
    {
      quote:"If life were predictable it would cease to be life, and be without flavor. ",
      author:"Eleanor Roosevelt",
    },
    {
      quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author:"Oprah Winfrey",
    },
    {
      quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",
      author:"James Cameron",
    },
    {
      quote:"Life is what happens when you're busy making other plans.",
      author:"John Lennon",
    },
    {
      quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author:"Mother Teresa",
    },
    {
      quote:"When you reach the end of your rope, tie a knot in it and hang on.",
      author:"Franklin D. Roosevelt",
    },
    {
      quote:"Always remember that you are absolutely unique. Just like everyone else. ",
      author:"Margaret Mead",
    },
    {
      quote:"The future belongs to those who believe in the beauty of their dreams.",
      author:"Eleanor Roosevelt",
    },
    {
      quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn. ",
      author:"Benjamin Franklin",
    },
  ])

  const [quote, setQuote]=useState({quote:quotes[0].quote,author:quotes[0].author})
  const [color, setColor]=useState(randomcolor())

  useEffect(() => {
    let xd= Math.floor(Math.random()*quotes.length)
    console.log(quotes.length)
    setQuote(()=>{return{quote:quotes[xd].quote,author:quotes[xd].author}})
  },[])


  const newQuote = () =>{
    setColor(randomcolor())
    let xd= Math.floor(Math.random()*quotes.length)
    setQuote(()=>{return{quote:quotes[xd].quote,author:quotes[xd].author}})
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{backgroundColor:color,height:"100vh"}}>
      <article className="d-flex flex-column align-items-center justify-content-center bg-light p-5" style={{width:"50%"}}>
        <div className="h-auto">
          <p className="text-center fst-italic font-monospace" style={{fontSize:"40px",color:color}}>"{quote.quote}"</p>
        </div>
        <div className="d-flex flex-row justify-content-end h-auto w-100">
          <p className="" >-{quote.author}</p>
        </div>
        <div className="d-flex flex-row justify-content-between h-auto w-100">
          <div>
            <a  
              target="_blank" 
              
              rel="noreferrer" 
              href={" https://twitter.com/intent/tweet?text="+'"'+quote.quote+'"  -'+quote.author} >
            <button 
              className="btn mx-1 text-light" 
              style={{backgroundColor:color}}>
                    <i class="bi bi-twitter"></i>
            </button>
            </a>
          </div>
          <div>
            <button className="btn mx-1" style={{backgroundColor:color}} onClick={newQuote}>New quote</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
