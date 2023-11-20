
type Props = {
    children: string,
    classname: string,
    handle?: any
}

const Button = ({children, classname, handle}: Props) => {
  return (
      <>
          <button className={classname} onClick={handle} >{children}</button>
      </>
  )
}

export default Button