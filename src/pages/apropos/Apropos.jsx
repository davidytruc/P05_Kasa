

import Navigation from "../../composants/Navigation"
import Banner from "../../composants/Banner"
import banner_apropos from '../../assets/images/banner_apropos.png'

export default function Apropos() {
    return (
        <div className="conteneur">
            <Navigation aproposunderline="navbar__link--underline" />
            <Banner altbanner="Bannière à propos" srcbanner={banner_apropos} />
            <h1>A propos</h1>
        </div>
    )
}