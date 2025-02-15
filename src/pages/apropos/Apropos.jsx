import Banner from "../../composants/Banner"
import banner_apropos from '../../assets/images/banner_apropos.png'
import AproposDetails from "../../composants/aproposdetails.jsx"

export default function Apropos() {
    const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service = "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
    const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique des hôtes."

    return (
        <div className="conteneur">
            <Banner imageUrl={banner_apropos} />
            <div className="apropos">
                <AproposDetails alt="Fiabilité" bandeau="Fiabilité" theme={fiabilite} />
                <AproposDetails alt="Respect" bandeau="Respect" theme={respect} />
                <AproposDetails alt="Service" bandeau="Service" theme={service} />
                <AproposDetails alt="Sécurité" bandeau="Sécurité" theme={securite} />
            </div>
        </div>
    )
}