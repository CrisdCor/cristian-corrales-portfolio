import "./styles.css";


const MyHeader = ()=>{
    return(
        <header className="header">
            <div className="button-menu">
                <p className="button-menu__text text-m">MENÚ</p>
                <span className="button-menu__bar button-menu__bar--top "></span>
                <span className="button-menu__bar button-menu__bar--medium-first"></span>
                <span className="button-menu__bar button-menu__bar--medium-second"></span>
                <span className="button-menu__bar button-menu__bar--bottom"></span>
            </div>
            <img className="header__logo"  src="" alt="logo de Cristian Corrales" />
        </header>
    )
}

export default MyHeader;