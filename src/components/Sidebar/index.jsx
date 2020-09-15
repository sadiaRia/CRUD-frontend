import React from 'react';
import './index.css';

function Sidebar({ sidebarList, changeTab }) {
  return (
    <div>
      <ul>
        {sidebarList.map(item => (
          <li><a onClick={() => changeTab(`${item}`)}>{item}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
