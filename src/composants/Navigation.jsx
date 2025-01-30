/* eslint-disable */

import { Link, useLocation } from 'react-router-dom'
import logo_desktop from '../assets/images/logo_desktop.png'
import '../styles.scss'

export default function Navigation() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
    return (
        <div className='navbar'>
          <img alt="Logo Kasa" src={logo_desktop} />
          <nav>
            <ul className='navbar__list'>
            <li><Link to="/" className={isActive('/') ? 'navbar__link navbar__link--underline' : 'navbar__link'}>Accueil</Link></li>
            <li><Link to="/apropos" className={isActive('/apropos') ? 'navbar__link navbar__link--underline' : 'navbar__link'}>A propos</Link></li>
            </ul>
          </nav>
        </div>
      );
}