import cln from './Footer.module.css'


const Footer = () => {
    return (
        <footer className={cln.footer}>
            <div>
                Author: Platonov Kirill
            </div>
            <div>
                <a href="platonovk1998@ya.ru">
                    platonovk1998@ya.ru
                </a>
            </div>
            <div>
                2022
            </div>
        </footer>
    );
}

export default Footer;