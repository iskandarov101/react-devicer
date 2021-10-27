import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import './main.scss';

const Header = ({isOpened, sidebarState, setSidebarState})=> {

  return(
    <div>
      <div className={`header ${isOpened ? 'opened' : ''}`}>
        <header className='container header-inner'>
          <Link className="header-link"  to="/">Servislar</Link>
          <Link className='header-link' to='/compony'>Name Company</Link>
          <Link className='header-link' to='/portfolio'>Portfolio</Link>
        </header>
        <div className='container menu-btn'>
          <MenuIcon onClick={()=> setSidebarState(!sidebarState)}  />
        </div>
      </div>
    </div>  
  )
}


export default Header;