import { useParams, Navigate } from "react-router-dom"
import logements from "../datas/logements.json"
import Rating from "./Rating.jsx"
import Description from "./Description.jsx"
import Equipement from "./Equipements"
import Carrousel from "./Carrousel.jsx";

export default function Detail() {
  const { id } = useParams() // Récupération de l'ID depuis l'URL
  const logement = logements.find((item) => item.id.toString() === id)

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="detail">

      <Carrousel
        nbrPic={logement.pictures}
        title={logement.title}
      />
      
      <div className="titletags">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul className="detailtags">
            {logement.tags.map ( tag =>
                <li key={tag}>{tag}</li>
              )
            }
          </ul>
        </div>
        <div className="hosts">
          <div className="detailhosts">
            <p>{logement.host.name}</p>
            <img alt={logement.host.name} src={logement.host.picture} />
          </div>
          <div className="rating">
            <Rating index={0} rating={logement.rating} />
            <Rating index={1} rating={logement.rating} />
            <Rating index={2} rating={logement.rating} />
            <Rating index={3} rating={logement.rating} />
            <Rating index={4} rating={logement.rating} />
          </div>
        </div>
      </div>
      
      <div className="description">
        <Description
          bandeau="Description"
          log_desc={logement.description}
        />
        <Equipement
          bandeau="Equipement"
          log_equi={logement.equipments}
        />
      </div>
      
    </div>
  );
}