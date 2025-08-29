import React, { useRef } from 'react'

function AccessDOMElement() {
    const inputRef= useRef(null);

    const handleClick=()=>{
        console.log(inputRef.current.value)
        inputRef.current.focus();
        inputRef.current.style.backgroundColor='yellow'
    }
  return (
    <div>
      <input   ref={inputRef} type="text" placeholder='Type something...'/>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default AccessDOMElement
