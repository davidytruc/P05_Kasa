import Banner from "../../composants/Banner"
import banner_apropos from '../../assets/images/banner_apropos.png'
import { useState } from "react"
import Entete from "../../composants/Entete.jsx"

export default function Apropos() {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."

    return (
        <div className="conteneur">
            <Banner imageUrl={banner_apropos} />
            <div className="apropos">
                <Entete entete="listeapropos" alt="Fiabilité" bandeau="Fiabilité" setIsOpen={setIsOpen1} isOpen={isOpen1} />
                {isOpen1 ? <div className="rolling">{fiabilite}</div> : <div className="hidden">{fiabilite}</div>}
                <Entete entete="listeapropos" alt="Respect" bandeau="Respect" setIsOpen={setIsOpen2} isOpen={isOpen2} />
                {isOpen2 && <div className="rolling">La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>}
                <Entete entete="listeapropos" alt="Service" bandeau="Service" setIsOpen={setIsOpen3} isOpen={isOpen3} />
                {isOpen3 && <div className="rolling">La qualité du service est au coeur de notre engagement chez Kasa.
                    Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</div>}
                <Entete entete="listeapropos" alt="Sécurité" bandeau="Sécurité" setIsOpen={setIsOpen4} isOpen={isOpen4} />
                {isOpen4 && <div className="rolling">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux
                    critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier
                    que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique des hôtes.</div>}
            </div>
        </div>
    )
}