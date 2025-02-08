import { useParams, Navigate } from "react-router-dom"
import { useState } from "react";
import logements from "../datas/logements.json"
import Rating from "./Rating.jsx"
import Description from "./Description.jsx"
import Equipement from "./Equipements"
import arrow_back from "../assets/images/arrow_back.png"
import arrow_forward from "../assets/images/arrow_forward.png"

export default function Detail() {
  const { id } = useParams() // Récupération de l'ID depuis l'URL
  const logement = logements.find((item) => item.id.toString() === id)

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Index, setIndex] = useState(0)
  const logNbrPic = logement.pictures.length
  const nextImage = () => {setIndex((prevIndex) => (prevIndex + 1) % logNbrPic)}
  const prevImage = () => {setIndex((prevIndex) => (prevIndex - 1 + logNbrPic) % logNbrPic)}

  return (
    <div className="detail">

      <div className="carrousel">
        <img alt={logement.title} src={logement.pictures[Index]} className="detailpictures" />
        {logNbrPic > 1 &&
        <>
          <img alt="Image précédente" src={arrow_back} className="arrow back" onClick={prevImage}/>
          <img alt="Image précédente" src={arrow_forward} className="arrow forward" onClick={nextImage}/>
          <div className='nbrPicture'>{`${Index + 1} / ${logNbrPic}`}</div>
        </>
        }
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