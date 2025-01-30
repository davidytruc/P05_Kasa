import Banner from "../../composants/Banner"
import banner_accueil from '../../assets/images/banner_accueil.png'

export default function Accueil() {
    return (
        <div className="conteneur">
            <Banner imageUrl={banner_accueil} textbanner="Chez vous, partout et ailleurs" />
            <h1>Ma page accueil</h1>
        </div>
    )
}