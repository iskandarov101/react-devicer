

import './main.scss';

const XizmatlarBtn = ({title, icon, active})=> {

  return(
    <button className={`sidebar-btn ${active ? 'active' : ''}`}>
      <div className='btn-icon'>{icon}</div>
      <span className='sidebar-title'>{title}</span>
    </button>
  )
}

export default XizmatlarBtn;