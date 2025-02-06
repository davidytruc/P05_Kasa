import { useParams } from "react-router-dom"
// import { useState } from "react"
import logements from "../datas/logements.json"
import Rating from "./Rating.jsx"
// import arrow from '../assets/images/arrow.png'
import Description from "./Description.jsx"
import Equipement from "./Equipements"

export default function Detail() {
  const { id } = useParams() // Récupération de l'ID depuis l'URL
  const logement = logements.find((item) => item.id.toString() === id)
  // const [isOpen1, setIsOpen1] = useState(false)
  // const [isOpen2, setIsOpen2] = useState(false)


  if (!logement) {
    return <p>Logement non trouvé</p>;
  }

  return (
    <div className="detail">

      <div className="carrousel">
        {/* {logement.pictures.map ( picture =>
          <ul key={picture} className="detailpictures">
            <li>{picture}</li>
          </ul>
        )
        } */}
        <img alt={logement.title} src={logement.pictures[0]} className="detailpictures" />
      </div>
      
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