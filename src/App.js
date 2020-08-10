import React from 'react';
import Helmet from 'react-helmet'
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



      <Helmet
   
    encodeSpecialCharacters={true}

    titleTemplate="Citações- %s"

    defaultTitle="Citações para Enem"
  
    defer={false}

 
    onChangeClientState={(newState, addedTags, removedTags) => console.log(newState, addedTags, removedTags)}
>
    {/* html attributes */}
    <html lang="pt-Br" amp />

    {/* body attributes */}
    <body className="root" />

    {/* title attributes and value */}
    <title itemProp="name" lang="en">para usar na sua redação</title>

    {/* base element */}
    {/* <base target="_blank" href="http://mysite.com/" /> */}

    {/* multiple meta elements */}
    <meta name="description" content="Uma pagina para você encontrar a melhor citação para sua redação nota mil no ENEM"/>
    <meta name="keywords" content="Redação, ENEM, alusão, citações, enem, prova, argumentação, lista, mil, intervenção" />
    <meta property="og:type" content="article" />

    {/* multiple link elements */}
    {/* <link rel="canonical" href="http://mysite.com/example" />
    <link rel="apple-touch-icon" href="http://mysite.com/img/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="http://mysite.com/img/apple-touch-icon-72x72.png" /> */}
   



    
</Helmet>
      </>
    )
  }
}

export default App