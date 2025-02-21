/* eslint-disable react/prop-types */

import { useState } from "react"
import Collapse from "./Collapse"

export default function Description({bandeau, log_desc}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="descriptiondetail">
            <div className="entete">
                <Collapse alt="Description" bandeau={bandeau} setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
            {isOpen ? <div className="collapse">{log_desc}</div> : <div className="collapse__hidden">{log_desc}</div>}
        </div>
    )
}