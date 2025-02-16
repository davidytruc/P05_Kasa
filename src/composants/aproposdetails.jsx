import { useState } from "react"
import Entete from "./Collapse.jsx"


// eslint-disable-next-line react/prop-types
export default function AproposDetails ({ alt, bandeau, theme }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="entete">
                <Entete alt={alt} bandeau={bandeau} setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
            {isOpen ? <div className="rolling">{theme}</div> : <div className="hidden">{theme}</div>}
        </>
    )
}