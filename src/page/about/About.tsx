// import React from 'react'
import Title from '../../component/layout/title/Title'
import pic from '../../image/profile.jpg'
import Text from '../../component/text/Text'
import style from '../../component/layout/title/title.module.scss'
import Skills from '../../component/layout/skills/Skills'
import Interest from '../../component/layout/interst/Interest'
import Service from '../service/Service'
import Contact from '../contact/Contact'
// import { useEffect } from 'react'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/src/ScrollTrigger'
import down from '../../image/zavatra.pdf'

type Props = {}


function About({ }: Props) {
	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);
	// 	gsap.to(".aboutProfile", {
	// 		scrollTrigger: {
	// 			trigger: ".aboutProfile",
	// 			start: "top buttom",
	// 			end: 'end	 buttom',
	// 			toggleActions: "restart none reverse none"
	// 		},
	// 		opacity: 1,
	// 		// x: 0,
	// 		duration: 2
	// 	})
	// })
  return (
    <div className='container'>
      <Title children='ABOUT' id='about' tittleChildren='LEARN MORE ABOUT ME' />
		<div className='aboutProfile'>
			<div><img src={pic} alt="" width='100%'/></div>
			<div className='aboutFlex'>
				<Text tag='p' children='Front-end developper' classname='aboutTittle' />
				<div className='aboutIntro'>
					<Text tag='p' children='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
				</div>
				<div className='aboutGrid'>
					<div>
						<div className='flex' >
							<Text tag='span' children='Name:' classname='label' />
							<Text tag='label' children='Rajaonarivo' />
						</div>
						<div className='flex'>
							<Text tag='span' children='Firstname:' classname='label' />
							<Text tag='label' children='Andry Pagiela Mizael' />
						</div>
						<div className='flex'>
							<Text tag='span' children='City:' classname='label' />
							<Text tag='label' children='Antananarivo, Madagascar' />
						</div>
					</div>
					<div>
						<div className='flex'>
							<Text tag='span' children='Phone:' classname='label' />
							<Text tag='label' children='032 77 910 53' />
						</div>
						<div className='flex'>
							<Text tag='span' children='Email:' classname='label' />
							<Text tag='label' children='pagielamizael@gmail.com' />
						</div>
						<div className='flex'>
							<Text tag='span' children='Freelance:' classname='label' />
							<Text tag='label' children='Avalable' />
						</div>
					</div>
				</div>
				<div className='aboutdescri'>
					<Text tag='p' children='Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores' />
				</div>
			  	<div className="socialMedia">
				  <a href={down} download="cv" target='_blank'><button className='serviceButton'>Download cv</button></a>
				</div>
			</div>
		</div>
		<div className='skillsBox'>
			<div className={style.flex} id='skills'>
      			<div className={style.line}></div>
      			<Text tag='p' children='SKILLS' />
			</div>
			<Skills />
		</div>
		<div className='interestBox'>
		  	<div className={style.flex} id='interest'>
      			<Text tag='p' children='INTEREST' />
      			<div className={style.line}></div>
			</div>
			<Interest />
		</div>
		<section id='myService'>
			<div className='service'>
				<div className={style.flex}>
      				<div className={style.line}></div>
      				<Text tag='p' children='SERVICE' />
				</div>  
				<Text tag='p' children='MY SERVICE' classname='serviceTittle' />  
			</div> 
			<div className='serviceBox'>
				<Service />
			</div>
		</section>
		  <section className="contact" id='contact'>
			<div className='contactWrappBox'>
				<div className={style.flex}>
      				<Text tag='p' children='CONTACT' />
      				<div className={style.line}></div>
				</div>  
				<Text tag='p' children='CONTACT ME' classname='serviceTittle' />  
			</div>
        	<Contact />
      	</section>
    </div>
  )
}

export default About