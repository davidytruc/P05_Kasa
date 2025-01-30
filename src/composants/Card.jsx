import logements from "./../datas/logements.json"

export default function Card() {
    return (
        <div className="liste_logements">
            <ul className="ulcard">
                {logements.map((logement) => (
                    <li key={logement.id} className="ulcard__li">
                        <a>
                            <img alt={logement.title} src={logement.cover} />
                            <p>{logement.title}</p>
                        </a>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}