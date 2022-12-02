import cln from './Sidebar.module.scss';
import PageButton from "./PageButton/PageButton";

const Sidebar = (props) => {
    const navlinkClick = () => {
        props.setDropdownOpen(false)
    }

    // generating page links
    let pages = ['profile', 'messages']
    let pageLinks =  pages.map(p => {
            let link = `/${p}`
            let label = p.charAt(0).toUpperCase() + p.slice(1)
            return (
                <div onClick={navlinkClick} key={p}>
                    <PageButton
                        link={link}
                        label={label}
                    />
                </div>
            )
        })

    return (
        <nav className={cln.sidebar}>
            <div className={cln.links}>
                {pageLinks}
            </div>
        </nav>
    );
}

export default Sidebar;