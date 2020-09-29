import React from 'react'
import "./styles.css"
import redacao from './Texts'


const id = redacao.id

class Cardes extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      render: false,
      numberOfText: 0
    }
    this.alertHi = this.alertHi.bind(this);
  }
  
  alertHi() {
  	this.setState({render: !this.state.render});
  }

  
  render(){
    
    return (
      <div className="cards">
        <div className="maindiv" >

          {redacao.map((coisas) => {
              return(
                <div>                
                  <div className="maindiv-2" > 
                      <p key={coisas.id}>{coisas.title}</p> 
                      <p>{coisas.text}</p>
                      <button type="submit" onClick={this.alertHi} className="btn-ler" >
                             Ler Redação 
                       </button> 
                          {this.state.render && <div className=""></div>}                    
                   </div>
              </div>) 
            }
          )
       }         
        </div>           
      </div>     
    )
  }
  
}
export default Cardes;