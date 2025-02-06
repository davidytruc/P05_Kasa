/* eslint-disable react/prop-types */

import { useState } from "react"
import Entete from "./Entete"

export default function Description({bandeau, log_desc}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="descriptiondetail">
            <Entete entete="entete" alt="Description" bandeau={bandeau} setIsOpen={setIsOpen} isOpen={isOpen} />
            {isOpen && <div className="rolling">{log_desc}</div>}
        </div>
    )

}