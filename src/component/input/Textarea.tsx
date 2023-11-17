
type Props = {
    placeholder: string
}

function Textarea({placeholder}: Props) {
  return (
      <>
        <textarea name="" id="" cols={30} rows={10} className="input" placeholder={placeholder}></textarea>
      </>
  )
}

export default Textarea