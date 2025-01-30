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
      <div className="detailcarrousel">
        {logement.pictures.map ( picture =>
          <ul key={picture} className="detailpictures">
            <li>{picture}</li>
          </ul>
        )
        }
      </div>
      <div className="titletags">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        {logement.tags.map ( tag =>
          <ul key={tag} className="detailtags">
            <li>{tag}</li>
          </ul>
        )
        }
      </div>
      <div className="hosts">
        <p>{logement.host.name}</p>
        <img alt={logement.host.name} src={logement.host.picture} />
        <p>{logement.rating}</p>
      </div>
      <div className="description">
        <p>{logement.description}</p>
        {logement.equipments.map ( equipement =>
          <ul key={equipement} className="detailequipements">
            <li>{equipement}</li>
          </ul>
        )
        }
      </div>
    </div>
  );
}