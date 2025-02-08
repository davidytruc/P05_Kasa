import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="page404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/" className="retour">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
}