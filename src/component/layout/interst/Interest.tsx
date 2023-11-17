
import Basket from '../../icon/Basket'
import Music from '../../icon/Music'
import Volley from '../../icon/Volley'
import Paint from '../../icon/Paint'
import Pencil from '../../icon/Pencil'
import Gamepad from '../../icon/Gamepad'
import LittleCard from '../littlecard/LittleCard'

type Props = {}

const interstItems = [{icone:<Basket />, label:'Basket-ball'},{icone:<Volley />, label:'volley-ball'},{icone:<Paint />, label:'Painting'},{icone:<Gamepad />, label:'Video games'},{icone:<Music />, label:'music'},{icone:<Pencil />, label:'Drawing'}]


function Interest({}: Props) {
  return (
    <div className='aboutProfile'>
        {
            interstItems.map((items, idx)=> <LittleCard icone={items.icone} label={items.label} key={idx} />)   
        }      
    </div>
  )
}

export default Interest;