import Text from '../../component/text/Text'
import style from './nav.module.scss'
import './nav.scss'

// type Props = {
// 	view: boolean;
// }
type linking = {
	link: string,
	label: string
}

function Nav() {
	const navItems: linking[] = [{ link: '', label: 'Home' }, { link: '#about', label: 'About' }, { link: '#myService', label: 'Service' }, { link: '#contact', label: 'Contact' }];
  return (
    <>
		<nav className={style.nav}>
				<div>
					<Text tag='h1' children='Pa' classname='logo' />
				</div>
				<div className="link">
					<ul className={style.navList}>
						{
							navItems.map((item, idx) => <li key={idx}><a href={item.link}>{item.label}</a></li>)
						}
					</ul>
				</div>
			</nav>	
    </>
  )
}

export default Nav