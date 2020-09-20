import React, { useEffect, useState } from 'react'
import { getForm } from '../../services/GetService';


const initialValues = {};


function Form({ type }) {
  const [formList, setFormDetails] = useState([])
  useEffect(() => {
    getForm().then(response => {
      const list = response.data.fields;
      setFormDetails(list[0])
      Object.keys(list[0]).map(function (key, index) {
        initialValues[key] = '';
      })
      console.log(initialValues);
    });
  }, [])


  return (
    <div>
      {type === 'create' && <h1>create new</h1>}
      {type === 'update' && <h1>update</h1>}
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">

        </div>
      </form>
    </div>
  )
}

export default Form
