import React from 'react'
import Modal from  './modal'
import "./styles.css"
import redacao from './Texts'


const id = redacao.id

;
class Cardes extends React.Component {
  // handleClick = () => {
  //  return(
  //     window.alert('Foi')
  //  )
  // }{this.handleClick}
 
 
  constructor(props) {
    super(props)
    this.state = {
    	render: false
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
              return(<div>
                
                <div className="maindiv-2" > 
                    <p key={id}>{coisas.title}</p> 
                   {/* <button type="submit" onClick={this.alertHi} className="btn-ler">Ler Redação</button> */}
                    {this.state.render && <div className=""><p></p></div>}
                    <Modal />
                </div>
              </div>) 
            })}
         
        </div>
           
      </div>
     
    )
  }
  
}
export default Cardes