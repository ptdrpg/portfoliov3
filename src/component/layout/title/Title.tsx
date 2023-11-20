import Text from '../../text/Text'
import style from './title.module.scss'

type Props = {
  children: string,
  id: string,
  tittleChildren: string
}

function Title({children, id, tittleChildren}: Props) {
  return (
      <>
        <div className={style.flex}>
          <Text tag='p' children={children} classname={id} />
          <div className={style.line}></div>
        </div>
      <Text tag="p" children={tittleChildren} classname={style.bigTittle} />
      </>
  )
}

export default Title