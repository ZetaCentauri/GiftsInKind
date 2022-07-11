const EasySteps = () => {
    return (
        <div className="easySteps">
            <span className="slogan">Wystarczą 4 proste kroki<br/></span>
            <div className="steps">
                <div className="step">
                    <span className="step__title">Wybierz rzeczy</span>
                    <p className="step__text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="step">
                    <span className="step__title">Spakuj je</span>
                    <p className="step__text">skorzystaj z worków na śmieci</p>
                </div> 
                <div className="step">
                    <span className="step__title">Zdecyduj komu chcesz pomóc</span>
                    <p className="step__text">wybierz zaufane miejsce</p>
                </div>
                <div className="step">
                    <span className="step__title">Zamów kuriera</span>
                    <p className="step__text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <button className="btn">Oddaj rzeczy</button>
        </div>
    )
}

export default EasySteps;