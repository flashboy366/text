import cln from './HeaderLogo.module.scss';


const HeaderLogo = () => {
    return (
        <header className={cln.logo}>
            <img alt='' src='https://cdn.worldvectorlogo.com/logos/text.svg'></img>
        </header>
    );
}

export default HeaderLogo;