import slider1 from '../../image/data/drawing.jpg'
import splider2 from '../../image/data/illustration.jpg'
import slider3 from '../../image/data/mobile3.jpg'
import slider4 from '../../image/data/web-dev3.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './serrvice.scss'
import Card from '../../component/layout/card/Card';

function Service() {
	
  return (
	<>
		<Swiper modules={[Autoplay, Pagination, Navigation]} className="mySwiper" loop={true} autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }} pagination={{
          dynamicBullets: true,
        }} navigation={true} >
			<SwiperSlide>
				  <Card picture={slider1} children='Traditional Drawing' description='Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum' />
			</SwiperSlide>
			  <SwiperSlide>
				  <Card picture={splider2} children='Digital Arts and illustration' description='Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum' />
			</SwiperSlide>
			  <SwiperSlide>
				  <Card picture={slider3} children='Mobile application developpement' description='Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum' />
			</SwiperSlide>
			<SwiperSlide>
				  <Card picture={slider4} children='Web developpement' description='Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum' />
			</SwiperSlide>
      	</Swiper>
	</>
  )
}

export default Service;