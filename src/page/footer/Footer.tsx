import Text from "../../component/text/Text"
import Facebook from "../../component/icon/Facebook"
import Instagram from "../../component/icon/Instagram"
import Tweeter from "../../component/icon/Tweeter"
import Linkedin from "../../component/icon/Linkedin"
import'./footer.scss'

const Footer = () => {
  return (
    <footer className="footercontainer">
      <Text tag='h2' children="Andry Pagiela" classname="footerInitial" />
      <Text tag='p' children="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt o" classname="footerDescription" />
      <div className="footer-social">
        <a href="https://www.facebook.com/andry.pagiela.5"><Facebook /></a>
        <a href="https://www.instagram.com/pagiela_mizael/"><Instagram /></a>
        <a href=""><Linkedin /></a>
        <a href=""><Tweeter /></a>
      </div>
    </footer>
  )
}

export default Footer