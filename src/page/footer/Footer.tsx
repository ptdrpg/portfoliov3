import Text from "../../component/text/Text"
import SocialMedia from "../../component/icon/SocialMedia"
import'./footer.scss'

const Footer = () => {
  return (
    <footer className="container">
      <Text tag='h2' children="Andry Pagiela" classname="footerInitial" />
      <Text tag='p' children="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt o" classname="footerDescription" />
      <SocialMedia />
    </footer>
  )
}

export default Footer