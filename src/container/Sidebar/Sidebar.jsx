// import { Link } from 'react-router-dom';
import './main.scss';

const Sidebar = ({isOpened})=> {

  return(
    <div className={`sidebar ${isOpened ? 'opened' : ''}`}>
      {/* <header className='sidebar-inner'>
          <Link className="header-link"  to="/">Servislar</Link>
          <Link className='header-link' to='/compony'>Name Company</Link>
          <Link className='header-link' to='/portfolio'>Portfolio</Link>
      </header> */}
    </div>
  )
}
export default Sidebar;