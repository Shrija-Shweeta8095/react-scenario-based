import React, { useState } from 'react'
import ScenarioThree from './ScenarioThree'

function ScenarioThreeParent() {
    const [message,setMessage] = useState('')

    const getDataFromChild=(msg)=>{
        setMessage(msg)
    }
  return (
    <div>
      <h2>Message from child:{message}</h2>
      <ScenarioThree getDataFromChild={getDataFromChild}/>
    </div>
  )
}

export default ScenarioThreeParent
