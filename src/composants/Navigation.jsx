import { Link } from 'react-router-dom'
import logo_desktop from '../assets/images/logo_desktop.png'

export default function Navigation() {
    return (
        <div className='header'>
          <img alt="Logo Kasa" src={logo_desktop} />
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A propos</Link>
          </nav>
        </div>
      );
}