import React from 'react'

class QuoteAndAuthor extends React.Component{
    render(){
        const randomColor = this.props.displayColor()
        const html = document.documentElement
        html.style.backgroundColor = randomColor
        return(
            <div className="quotebox" style={{backgroundColor: "white"}}>
                <div className="fadeIn" key={Math.random()} style={{color: randomColor}}>
                    <h1 id="quote">"{this.props.quote}"</h1>
                    <h5 id="author">- {this.props.author ? this.props.author : "Unknown"}-</h5>
                </div>
                <button id="newquote" style={{backgroundColor: randomColor}} onClick={this.props.handleClick}> New quote</button>
            </div>
        )
    }
}

export default QuoteAndAuthor