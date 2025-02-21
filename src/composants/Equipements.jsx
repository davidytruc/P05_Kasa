/* eslint-disable react/prop-types */

import { useState } from "react"
import Collapse from "./Collapse"

export default function Equipement({bandeau, log_equi}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="descriptiondetail">
          <div className="entete">
            <Collapse alt="Equipements" bandeau={bandeau} setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
          {isOpen ?
            <ul  className="collapse">
              {log_equi.map ( equipement =>
                <li key={equipement}>{equipement}</li>
              )
              }
            </ul>
            :
            <ul  className="collapse__hidden">
              {log_equi.map ( equipement =>
                <li key={equipement}>{equipement}</li>
              )
              }
            </ul>
          }
        </div>
    )
}