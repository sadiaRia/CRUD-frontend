import React from 'react'

function Form({type}) {
  return (
    <div>
      {type === 'create' && <h1>create new</h1>}
      {type === 'update' && <h1>update</h1>}
    </div>
  )
}

export default Form
