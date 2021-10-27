
import './main.scss';
import Avatar from '../../assets/images/testimonial.jpg';
const Testimonial = ()=> {

  return(
    <div className='testimonial container'>
      <div className='testimonial-inner'>
        <img className='testimonial-avatar' width='90' height='90' src={Avatar} alt="testimonial-avatar" />
        <p className='testimonial-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet volutpat elit.</p>
      </div>
      <div className='testimonial-inner'>
        <img className='testimonial-avatar' width='90' height='90' src={Avatar} alt="testimonial-avatar" />
        <p className='testimonial-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet volutpat elit.</p>
      </div>
      <div className='testimonial-inner'>
        <img className='testimonial-avatar' width='90' height='90' src={Avatar} alt="testimonial-avatar" />
        <p className='testimonial-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet volutpat elit.</p>
      </div>
    </div>
  )
}

export default Testimonial;