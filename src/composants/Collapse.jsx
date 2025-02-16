/* eslint-disable react/prop-types */

import arrow from '../assets/images/arrow.png'

export default function Collapse ({ bandeau, alt, setIsOpen, isOpen }) {

    return (
        <>
            <p>{bandeau}</p>
            <img
                alt={alt}
                src={arrow}
                className={`arrow ${isOpen ? "rotate" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            />
        </>
    )
}

