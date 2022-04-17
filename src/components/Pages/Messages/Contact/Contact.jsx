import cln from './Contact.module.css'
import {NavLink} from "react-router-dom";

const Contact = (props) => {

    let handleClick = () => {
        props.firstDialogLoadSet(true)
    }

    return (
        <div className={cln.contactButton}>
            <div className={
                cln.contactLink + ' '
                + (props.openDialogId === props.id ? cln.open : cln.closed)
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