import React from 'react'

class QuoteAndAuthor extends React.Component{
    render(){
        const randomColor =  'whitesmoke'                            //this.props.displayColor()
        const html = document.documentElement
        html.style.backgroundColor = randomColor
        return(
            <div className="quotebox" style={{backgroundColor: "#f0dd25"}}>
                <div className="fadeIn" key={Math.random()} style={{color: 'blue'}}>
                    <h1 id="quote">"{this.props.quote}"</h1>
                    <h5 id="author">- {this.props.author ? this.props.author : "Unknown"}-</h5>
                </div>
                <button id="newquote" style={{backgroundColor: 'red'}} onClick={this.props.handleClick}> Nova citação</button>
            </div>
        )
    }
}

export default QuoteAndAuthor