import React from 'react';
import QuotesAndAuthor from './Quotes';
import quotes from './QuotesDataBase';
import Navbar from './components/Nav/Hamburger'
import Text from './containers/Text'
import Footer from './footer/Footer'
import './App.css';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    }
  }

  randomQuotes(){
    const randomNumber = Math.floor(Math.random() * quotes.length)
    return quotes[randomNumber]
  }

  shuffleQuotes(array){
    return array.sort(() => Math.random()-0.5)
  }

  handleClick = () =>{
    const generateRandomQuote = this.randomQuotes()
    this.setState({
      quote:generateRandomQuote.quote,
      author: generateRandomQuote.author
    })
    this.shuffleQuotes(quotes)
  }

  randomColor(){
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`

      return color
  }

    handleClick2() {
        this.setState({
            open: !this.state.open
        });
    }
  render(){
    return(
      <>
       <Navbar />
      <div>   
       <QuotesAndAuthor displayColor={this.randomColor} handleClick={this.handleClick} {...this.state}/>
       
      </div>
      <Text />
      <Footer />
      </>
    )
  }
}

export default App