import { Link } from 'react-router-dom';
import XizmatlarBtn from '../../components/XizmatlarBtn/XizmatlarBtn';

//====ICONS=====
import {
  Oshpaz,
  Gullar,
  Taklifnoma,
  Toyxona,
  Saxna,
  Uzuklar,
  Sanatkorlar,
  Sozandalar,
  Foto,
  Tasvir,
  Clothes,
  Cars,
  Multi,
  Gifts,
  Cakes
} from '../../assets/icons/Icons';


import './main.scss';

const Xizmatlar = ()=> {

  return(
    <div className='services'>
      <div className='container'>
        <div className='services-inner'>
          <div className='services-inner--search-wrapper'>
            <input className='services-inner--search' type="search" placeholder='Qidiruv' />
          </div>
          <div className='services-inner--region-wrapper'>
            <input className='services-inner--region' type="search" placeholder='Viloyat, shaxar' />
          </div>
        </div>
        <div>
          <h3 className='services-title'>Xizmatlarimiz</h3>
        </div>
        <div className='services-wrapper'>
          <div className='services-wrapper-first'> 
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='To`yxonalar' icon={<Toyxona />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Taklifnomalar' icon={<Taklifnoma />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Gullar' icon={<Gullar />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Oshpazlar' icon={<Oshpaz />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Saxna bezaklari' icon={<Saxna />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Uzuklar' icon={<Uzuklar />} />
            </Link>
          </div>
          <div  className='services-wrapper-second'>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='San`atkorlar' icon={<Sanatkorlar />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='To`y liboslari' icon={<Clothes />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Sozandalar' icon={<Sozandalar />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Tasvir va montaj' icon={<Tasvir />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Fotostudiolar' icon={<Foto />} />
            </Link>
          </div>
          <div  className='services-wrapper-third'>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Mashinalar' icon={<Cars />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Multi qahramonlar' icon={<Multi />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Sovg`alar' icon={<Gifts />} />
            </Link>
            <Link className='xizmatlar-item' to=''>
              <XizmatlarBtn title='Shirinliklar' icon={<Cakes />} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Xizmatlar;