
const HomeHeader = () => {
    return (
        <div className="container header">
            {/* <img className="img" src="./assets/HeroImage.png" alt="different things" /> */}
            <div className="img"/>
            <div className="header__content">
                <ul className="logIn__list">
                    <li className="logIn__list--item">Zaloguj</li>
                    <li className="logIn__list--item">Załóż konto</li>
                </ul>
                <nav className="header__nav ">
                    <ul className="nav__list">
                        <li className="nav__list--item">Start</li>
                        <li className="nav__list--item">O co chodzi?</li>
                        <li className="nav__list--item">O nas</li>
                        <li className="nav__list--item">Fundacja i organizacje</li>
                        <li className="nav__list--item">Kontakt</li>
                    </ul>
                </nav>
                <span className="slogan">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce<br/></span>
                <div className="buttons__container">
                    <button className='btn'>Oddaj <br/>rzeczy</button>
                    <button className='btn'>Zorganizuj <br/>zbiórkę</button>
                </div>
                
            </div>
        </div>
    )
}

export default HomeHeader;