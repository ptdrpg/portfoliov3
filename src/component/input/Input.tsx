import './input.scss'

type Props = {
  placeholder: string,
  name: string,
  change?: any
}

function Input({placeholder, name, change}: Props) {
  return (
    <>
      <input type="text" className='input' placeholder={placeholder} name={name} onChange={change} />      
    </>
  )
}

export default Input