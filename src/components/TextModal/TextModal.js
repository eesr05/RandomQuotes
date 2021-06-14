import React, { useState } from 'react'
import styles from '../TextModal/stylesModal.module.css'

 export default class TextModal extends React.Component{
     render(){
        if(!this.props.show){
            return null;
        }
    // const [level,  closeLevelUpModal] = useState(false)
    const [IsModalOpen, setIsModalOpen] = useState(false)
   
    return(
      <div className={styles.overlay}>
          <button className={styles.btn_modal} onClick={() => setIsModalOpen(true)}>Open </button>
          {IsModalOpen ?
          <div className={styles.container}>
        

          <strong>Parabéns</strong>
          <p>Aqui vai o texto.</p>

          <button  type='button' onClick={()=> setIsModalOpen(false)}>
            {/* <img  alt="Fechar modal"/> X */} Close
          </button>
        </div> : null}

      </div>
    )
  }
 }
  