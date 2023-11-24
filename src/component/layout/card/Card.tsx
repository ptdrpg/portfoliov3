import './Card.scss'
import Text from '../../text/Text'
import Button from '../../button/Button'

type Props = {
  children: string,
  picture: string,
  description: string
}

function Card({children, picture, description}: Props) {
  return (
    <div className='card'>
      <div className='cardImage'>
        <img src={picture} alt="" width='100%' />
      </div>
      <div className='cardDescription'>
        <Text tag='p' children={children} classname='cardTittle' />
        <Text tag='p' children={description} />
        <Button children='go watch' classname='serviceButton' />
      </div>
    </div>
  )
}

export default Card