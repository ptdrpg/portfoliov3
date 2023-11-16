import React from 'react'

type Props = {
    icone: any
    label: string
}

function LittleCard({icone, label}: Props) {
  return (
    <div className='interestCard'>
        {icone}
        <div>{label}</div>
    </div>
  )
}

export default LittleCard