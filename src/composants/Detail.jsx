import { useParams } from "react-router-dom";
import logements from "../datas/logements.json";

export default function Detail() {
  const { id } = useParams() // Récupération de l'ID depuis l'URL
  const logement = logements.find((item) => item.id.toString() === id)

  if (!logement) {
    return <p>Logement non trouvé</p>;
  }

  return (
    <div className="detail">
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
    </div>
  );
}