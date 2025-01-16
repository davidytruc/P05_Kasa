import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
          <Link to="/accueil">Accueil</Link>
          <Link to="/apropos">A propos</Link>
        </nav>
      );
}