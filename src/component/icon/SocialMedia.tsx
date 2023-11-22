import Facebook from "./Facebook"
import Instagram from "./Instagram"
import Tweeter from "./Tweeter"
import Linkedin from "./Linkedin"
import style from'./social.module.scss'

type myreseau = {
  label: JSX.Element,
  link: string
}

const reseau: myreseau[] = [
  {label: <Facebook />, link: ''},
  {label: <Instagram />, link: ''},
  {label: <Linkedin />, link: ''},
  {label: <Tweeter />, link: ''},
]

function SocialMedia() {
  return (
    <div className={style.flex}>
      {
        reseau.map((Element) => <a href={Element.link}>{Element.label}</a> )
      }
    </div>
  )
}

export default SocialMedia