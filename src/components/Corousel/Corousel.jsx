import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {RightIcon} from '../../assets/icons/Icons';
import {LeftIcon} from '../../assets/icons/Icons';

import Img1 from '../../assets/images/1-4.jpg'
import Img2 from '../../assets/images/1-1.jpg'
import Img3 from '../../assets/images/1-2.jpg'
import Img4 from '../../assets/images/1-3.jpg'

import "./main.scss";

function Corusel() {

  const [index, setIndex] = useState(0)

  useEffect(()=> {
    document.documentElement.style.setProperty("--index", index)
  }, [index])

  return(
    <>
      <div className="slider">
        <ul className="slider-list">
          <li className="slider-item">
            <Link  className="slider-link">
              <img className="slider__img" src={Img1} width="1400" height="460" alt="Betman"/>
            </Link>
          </li>
          <li className="slider-item">
            <Link className="slider-link">
              <img className="slider__img" src={Img2} width="1400" height="460" alt="WonderWoman"/>
            </Link>
          </li>
          <li className="slider-item">
            <Link className="slider-link">
              <img className="slider__img" src={Img3} width="1400" height="460" alt="De Goll"/>
            </Link>
          </li>
          <li className="slider-item">
            <Link className="slider-link">
              <img className="slider__img" src={Img4} width="1400" height="460" alt="Kaxa"/>
            </Link>
          </li>
        </ul>
        <button className="slider-controller controller-left" onClick={()=> {
          index > 0 && setIndex(index - 1)
        }}><LeftIcon/></button>
        <button className="slider-controller controller-right" onClick={()=> {
          index < 5 && setIndex(index + 1)
        }}><RightIcon/></button>
      </div>
    </>
  )
}

export default Corusel