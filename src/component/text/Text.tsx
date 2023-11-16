import React, { ElementType } from 'react'

type Props = {
    tag: ElementType,
    children: string,
    classname?: string
}

function Text({ tag, children, classname }: Props) {
    const Tag = tag
    return (
        <Tag className={classname}>{children}</Tag>
  )
}

export default Text