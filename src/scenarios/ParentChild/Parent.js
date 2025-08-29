import React, { useState } from 'react'
import ScenarioTwo from './ScenarioTwo'

function Parent() {
    const [name, setName] =useState('')

    const handleClick=()=>{
        setName('Shrija')
    }
  return (
    <div>
        <ScenarioTwo name={name}/>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Parent
