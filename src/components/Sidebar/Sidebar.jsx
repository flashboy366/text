import cln from './Sidebar.module.css';
import PageButton from "./PageButton/PageButton";


const Sidebar = () => {
    return (
        <nav className={cln.sidebar}>
            <div className={cln.links}>
                {/*<PageButton link='/news' label='News' />*/}
                <PageButton link='/profile' label='Profile' />
                <PageButton link='/messages' label='Messages' />
                {/*<PageButton link='/music' label='Music' />*/}
                {/*<PageButton link='/settings' label='Settings' />*/}
            </div>
        </nav>
    );
}

export default Sidebar;