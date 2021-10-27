

import Xizmatlar from "../../container/Xizmatlar/Xizmatlar";

import Corousel from "../../components/Corousel/Corousel";
import Testimonial from '../../components/Testimonial/Testimonial';
import Saroy from "../../components/Saroy/Saroy";

const Servislar = ()=> {

  return(
    <div>
      <Corousel/>
      <Xizmatlar />
      <Testimonial />
      <Saroy />
      <h1> Servislar page </h1>
    </div>
  )
}

export default Servislar;