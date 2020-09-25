import React from 'react'
import "./styles.css"
import redacao from './Texts'


const id = redacao.id
class Cardes extends React.Component {
  
  render(){
    return (
      <div className="cards">
      <div className="maindiv" >
       <p key={id}>{this.props.title}</p> 
       <p></p>
       </div>
      <div className="maindiv " > <p key={id}>{this.props.title}</p>  </div>
      <div className="maindiv " > <p key={id}>{this.props.title}</p>  </div>
      </div>
     
    )
  }
  
}
export default Cardes