
type Props = {
  placeholder: string,
  name: string,
  handle?: any
}

function Textarea({placeholder, name, handle}: Props) {
  return (
      <>
        <textarea name={name} id="" cols={30} rows={10} className="input" placeholder={placeholder} onChange={handle} required ></textarea>
      </>
  )
}

export default Textarea