
type Props = {
    children: string,
    classname: string
}

const Button = ({children, classname}: Props) => {
  return (
      <>
          <button className={classname} >{children}</button>
      </>
  )
}

export default Button