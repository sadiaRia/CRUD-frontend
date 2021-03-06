import React, { useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Form from '../../components/Form'
import List from '../../components/List'
import './index.css';

const sidebarList = ['Create', 'Update', 'List'];

function Main() {
  const [tabOption, setTabOption] = useState('Create');

  const onOptionClick = item => {
    setTabOption(item);
  }
  return (
    <div>
      <Header />
      <div>
        <div className="row main">
          <div className="col-3 col-md-3 sidebar">
            <Sidebar sidebarList={sidebarList} changeTab={onOptionClick} />
          </div>
          <div className="col-9 col-md-9 ">
            <div className="container">
              {tabOption === 'Create' && <Form type={'create'} />}
              {tabOption === 'Update' && <Form type={'update'} />}
              {tabOption === 'List' && <List />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
