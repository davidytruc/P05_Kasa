/* eslint-disable react/prop-types */

import { useState } from "react"
import Collapse from "./Collapse"

export default function Equipement({bandeau, log_equi}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="descriptiondetail">
          <Collapse entete="entete" alt="Equipements" bandeau={bandeau} setIsOpen={setIsOpen} isOpen={isOpen} />
          {isOpen ?
            <ul  className="rolling">
              {log_equi.map ( equipement =>
                <li key={equipement}>{equipement}</li>
              )
              }
            </ul>
            :
            <ul  className="hidden">
              {log_equi.map ( equipement =>
                <li key={equipement}>{equipement}</li>
              )
              }
            </ul>
          }
        </div>
    )
}