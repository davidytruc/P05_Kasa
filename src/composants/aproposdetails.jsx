import { useState } from "react"
import Collapse from "./Collapse.jsx"


// eslint-disable-next-line react/prop-types
export default function AproposDetails ({ alt, bandeau, theme }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="entete">
                <Collapse alt={alt} bandeau={bandeau} setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
            {isOpen ? <div className="collapse">{theme}</div> : <div className="collapse__hidden">{theme}</div>}
        </>
    )
}