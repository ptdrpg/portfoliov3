import React from 'react'
import Title from '../../component/layout/title/Title'
import pic from '../../image/profile.jpg'
import Text from '../../component/text/Text'
import style from '../../component/layout/title/title.module.scss'
import SocialMedia from '../../component/icon/SocialMedia'
import Skills from '../../component/layout/skills/Skills'
import Interest from '../../component/layout/interst/Interest'

type Props = {}


function About({}: Props) {
  return (
    <div className='container'>
      <Title children='ABOUT' id='about' tittleChildren='LEARN MORE ABOUT ME' />
		<div className='aboutProfile'>
			<div><img src={pic} alt="" width='100%'/></div>
			<div className='aboutFlex'>
				<Text tag='p' children='Front-end developper' classname='aboutTittle' />
				<div>
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
				<div>
					<Text tag='p' children='Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores' />
				</div>
			  	<div className="socialMedia">
				  <Text tag='p' children='Contact me' classname='contactMe' /> 
				 	<SocialMedia />
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
		<section>
			<div className='service'>
				<div className={style.flex}>
      				<div className={style.line}></div>
      				<Text tag='p' children='SERVICE' />
				</div>  
				<Text tag='p' children='MY SERVICE' classname='serviceTittle' />  
			</div>
		</section>
    </div>
  )
}

export default About