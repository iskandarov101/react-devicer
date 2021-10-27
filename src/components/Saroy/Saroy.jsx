import { Link } from 'react-router-dom';
import CastleImg from '../../assets/images/castle.png';
import XizmatlarBtn from '../XizmatlarBtn/XizmatlarBtn';
import { Clothes } from '../../assets/icons/Icons';
import './main.scss';

const Saroy = ()=> {

  return(
    <div className='saroy'>
      <div className="container">
        <div className="saroy-wrapper">
          <div>
            <img src={CastleImg} alt="castle" />
          </div>
          <div className='saroy-inner-wrapper'>
            <h3 className='saroy-title'>Tantanalar saroyi</h3>
            <p className='saroy-text'>Ajoyib ko‘rinishdagi to‘y va marosimlar o‘tkazish koshanasi.</p>
            <p className='saroy-text'>Sizning orzuyingizdai to‘y uchun bizning koshonamiz xizmatingizga tayyor.</p>
            <Link className='saroy-btn' to=''>
              <XizmatlarBtn title='To`yxonalar' icon={<Clothes />} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Saroy;