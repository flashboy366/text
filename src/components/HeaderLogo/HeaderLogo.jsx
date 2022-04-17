import cln from './HeaderLogo.module.css';


const HeaderLogo = () => {
    return (
        <header className={cln.logo}>
            <div>
                <img src='https://cdn.worldvectorlogo.com/logos/text.svg'></img>
            </div>
        </header>
    );
}

export default HeaderLogo;