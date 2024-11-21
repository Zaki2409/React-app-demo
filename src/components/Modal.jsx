import classes from '../components/Modal.module.css';

function Modal(props) { // can also use object destructuring to direclty access the specific 
    //property of that props object (works for all props)
    //EX function Modal({children})
    // <dialog className={classes.modal}>
    //{children} 
    //</dialog>  
return (
<>
<div className={classes.backdrop} />
    <dialog open className={classes.modal}>
        {props.children} 
    </dialog>

</>
);
// open prop in line 12 is req to make it visible , by default its set to true
}
export default Modal;
