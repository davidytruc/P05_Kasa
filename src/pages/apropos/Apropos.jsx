import Banner from "../../composants/Banner"
import banner_apropos from '../../assets/images/banner_apropos.png'

export default function Apropos() {
    return (
        <div className="conteneur">
            <Banner imageUrl={banner_apropos} />
            <h1>A propos</h1>
        </div>
    )
}