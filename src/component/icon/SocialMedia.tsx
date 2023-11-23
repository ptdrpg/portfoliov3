import Facebook from "./Facebook"
import Linkedin from "./Linkedin"
import Instagram from "./Instagram"
import Tweeter from "./Tweeter"

type Props = {}

function SocialMedia({}: Props) {
  return (
    <div className="footer-social">
      <a href="https://www.facebook.com/andry.pagiela.5"><Facebook /></a>
      <a href="https://www.instagram.com/pagiela_mizael/"><Instagram /></a>
      <a href=""><Linkedin /></a>
      <a href=""><Tweeter /></a>
    </div>
  )
}

export default SocialMedia