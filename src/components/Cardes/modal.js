import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import redacao from './Texts'
import "./styles.css"
// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`
//   };
// }
const id = redacao.id
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal() {



  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div  className={classes.paper}>
      {redacao.map((coisas) => {
              return(
                <div>                
                  <div className="" > 
                      <p key={id}>{coisas.id}</p> 
                    {/* <button type="submit" onClick={this.alertHi} className="btn-ler">Ler Redação</button> */}
                      {/* {this.state.render && <div className=""><p></p></div>} */}
                      
                  </div>
              </div>) 
            })}
      <SimpleModal />
    </div>
  ) 

  
  return (
    <div>
      <button type="button" className="btn-ler" onClick={handleOpen}>
        Ler redação
      </button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
