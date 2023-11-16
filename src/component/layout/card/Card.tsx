import React from 'react'
import Text from '../../text/Text'

type Props = {
    children: string,
    picture: string
}

function Card({children, picture}: Props) {
  return (
    <div className='card'>
        <div>
          <img src={picture} alt="" />
        </div>
        <Text tag='p' children={children} />
    </div>
  )
}

export default Card