import cln from './PageButton.module.scss';
import {NavLink} from "react-router-dom";

const PageButton = (props) => {
    return (
        <div className={cln.pageButton}>
            <NavLink
                to={props.link}
                className={({isActive}) => (isActive ? cln.active : cln.inActive)}
            >{props.label}</NavLink>
        </div>
    );
}
export default PageButton;