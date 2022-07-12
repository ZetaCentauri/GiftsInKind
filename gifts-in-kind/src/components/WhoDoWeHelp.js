const WhoDoWeHelp = () => {
    return (
        <div className="who_do_we_help">
            <span className="slogan">Komu pomagamy?</span>
            <ul className="who_do_we_help__list">
                <li className="who_do_we_help__list--item">Fundacjom</li>
                <li className="who_do_we_help__list--item">Organizacjom pozarządowym</li>
                <li className="who_do_we_help__list--item">Lokalnym zbiórkom</li>
            </ul>
            <p className="who_do_we_help__descr">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div className="who_do_we_help__table">
                <ul className="fundations_list">
                    <li className="fundations_list__item">
                        <div>
                            <span>Fundacja “Dbam o Zdrowie”</span>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                    </li>
                    <li className="fundations_list__item">
                        <div>
                            <span>Fundacja “Dbam o Zdrowie”</span>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                    </li>
                    <li className="fundations_list__item">
                        <div>
                            <span>Fundacja “Dbam o Zdrowie”</span>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                    </li>
                </ul>
                <div className="who_do_we_help__pages">
                    <span className="who_do_we_help__pages">1</span>
                    <span className="who_do_we_help__pages">2</span>
                    <span className="who_do_we_help__pages">3</span>
                </div>
            </div>
        </div>
    )
}

export default WhoDoWeHelp;