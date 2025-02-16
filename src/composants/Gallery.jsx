/* eslint-disable react/prop-types */
import { useState } from "react";
import arrow_back from "../assets/images/arrow_back.png"
import arrow_forward from "../assets/images/arrow_forward.png"

export default function Gallery({ nbrPic, title }) {
  const [Index, setIndex] = useState(0)
  const logNbrPic = nbrPic.length
  const nextImage = () => {setIndex((prevIndex) => (prevIndex === logNbrPic - 1) ? 0 : prevIndex + 1)}
  const prevImage = () => {setIndex((prevIndex) => (prevIndex === 0) ? logNbrPic - 1 : prevIndex - 1)}

  //Solution avec modulo
  // const nextImage = () => {setIndex((prevIndex) => (prevIndex + 1) % logNbrPic)}
  // const prevImage = () => {setIndex((prevIndex) => (prevIndex - 1 + logNbrPic) % logNbrPic)}

  return (
      <div className="gallery">
        <img alt={title} src={nbrPic[Index]} className="detailpictures" />
        {logNbrPic > 1 &&
        <>
          <img alt="Image précédente" src={arrow_back} className="arrow back" onClick={prevImage}/>
          <img alt="Image précédente" src={arrow_forward} className="arrow forward" onClick={nextImage}/>
          <div className='nbrPicture'>{`${Index + 1} / ${logNbrPic}`}</div>
        </>
        }
      </div>
    )
}