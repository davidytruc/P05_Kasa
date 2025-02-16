import { useParams, Navigate } from "react-router-dom"
import logements from "../../datas/logements.json"
import Stars from "../../composants/Stars.jsx"
import Description from "../../composants/Description.jsx"
import Equipement from "../../composants/Equipements.jsx"
import Carrousel from "../../composants/Gallery.jsx";

export default function Logementid() {
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
            <Stars index={0} rating={logement.rating} />
            <Stars index={1} rating={logement.rating} />
            <Stars index={2} rating={logement.rating} />
            <Stars index={3} rating={logement.rating} />
            <Stars index={4} rating={logement.rating} />
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