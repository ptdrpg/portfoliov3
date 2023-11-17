import './input.scss'

type Props = {
    placeholder: string
}

function Input({placeholder}: Props) {
  return (
    <>
        <input type="text" className='input' placeholder={placeholder} />      
    </>
  )
}

export default Input