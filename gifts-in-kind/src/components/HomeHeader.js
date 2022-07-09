
const HomeHeader = () => {
    return (
        <div className="container header">
            <img className="img" src="./assets/HeroImage.png" alt="different things" />
            <div className="header__content">
                <div><span>Zaloguj</span><span>Załóz konto</span></div>
                <nav className="header__nav ">
                    <ul className="nav__list">
                        <li className="nav__list--item">Start</li>
                        <li className="nav__list--item">O co chodzi?</li>
                        <li className="nav__list--item">O nas</li>
                        <li className="nav__list--item">Fundacja i organizacje</li>
                        <li className="nav__list--item">Kontakt</li>
                    </ul>
                </nav>
                <span className="slogan">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</span>
                <div className="buttons__container">
                    <button className='btn'>Oddaj <br/>rzeczy</button>
                    <button className='btn'>Zorganizuj <br/>zbiórkę</button>
                </div>
                
            </div>
        </div>
    )
}

export default HomeHeader;