import cln from './Contact.module.css'
import {NavLink} from "react-router-dom";

const Contact = (props) => {

    // Notify app about first load of the dialog for 
    // scrolling to last message
    let handleClick = () => {
        props.firstDialogLoadSet(true)
    }

    return (
        <div className={cln.contactButton}>
            {/* Button for routing to dialog
            with chosen contact */}
            <div className={
                cln.contactLink + ' '
                + (props.openDialogId === props.id ?
                    cln.open : cln.closed)
            }>
                <NavLink
                    onClick={handleClick}
                    to={'/messages/' + props.id}
                >{props.name}</NavLink>
            </div>
            <hr></hr>
        </div>
    );
}

export default Contact;