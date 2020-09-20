import React, { useEffect, useState } from 'react'
import {getForm} from '../../services/GetService';

function Form({ type }) {
  useEffect(() => {
    getForm().then(res=>{
console.log(res)
    })
  })
  return (
    <div>
      {type === 'create' && <h1>create new</h1>}
      {type === 'update' && <h1>update</h1>}
    </div>
  )
}

export default Form
