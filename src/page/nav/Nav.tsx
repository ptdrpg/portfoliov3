import Text from '../../component/text/Text'
import { Link } from 'react-router-dom'
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
	const navItems: linking[] = [{ link: '', label: 'Home' }, { link: '/about', label: 'About' }, { link: '', label: 'Service' }, { link: '', label: 'Contact' }];
  return (
    <>
		<nav className={style.nav}>
				<div>
					<Text tag='h1' children='Pa' classname='logo' />
				</div>
				<div className="link">
					<ul className={style.navList}>
						{
							navItems.map((item, idx) => <li><Link to={item.link} key={idx}>{item.label}</Link></li>)
						}
					</ul>
				</div>
			</nav>	
    </>
  )
}

export default Nav