/* eslint-disable react/prop-types */

import arrow from '../assets/images/arrow.png'

export default function Entete ({ bandeau, alt, setIsOpen, isOpen }) {

    return (
        <div className="entete">
            <p>{bandeau}</p>
            <img
                alt={alt}
                src={arrow}
                className={`arrow ${isOpen ? "rotate" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            />
</div>
    )
}

