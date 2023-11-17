import Text from "../../text/Text"

type Props = {
    icone: any,
    label: string,
    desc: string
}

function LittleCardVariant({icone, label, desc}: Props) {
  return (
    <div className='variant'>
        {icone}
        <div className="contactTextitems">
            <Text tag='h2' children={label} />
            <Text tag='p' children={desc} />
        </div>
    </div>
  )
}

export default LittleCardVariant