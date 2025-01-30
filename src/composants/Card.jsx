import { Link } from 'react-router-dom'
import logements from "./../datas/logements.json"

export default function Card() {
    return (
        <div className="liste_logements">
            <ul className="ulcard">
                {logements.map((logement) => (
                    <li key={logement.id} className="ulcard__li">
                        <Link to={`/logement/${logement.id}`}>
                            <img alt={logement.title} src={logement.cover} />
                            <p>{logement.title}</p>
                        </Link>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}