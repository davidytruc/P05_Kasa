/* eslint-disable */

import { Link } from 'react-router-dom'
import logo_desktop from '../assets/images/logo_desktop.png'
import '../styles.scss'

export default function Navigation({ accueilunderline, aproposunderline }) {
    return (
        <div className='navbar'>
          <img alt="Logo Kasa" src={logo_desktop} />
          <nav className='navbar'>
            <Link to="/" className={`navbar__link ${accueilunderline}`}>Accueil</Link>
            <Link to="/apropos" className={`navbar__link ${aproposunderline}`}>A propos</Link>
          </nav>
        </div>
      );
}