import classNames from 'classnames'
import React, { FC, InputHTMLAttributes, ReactElement } from 'react'
import { IconProp} from '@fortawesome/fontawesome-svg-core'

type InpputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InpputSize;
  icon?: IconProp;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
}

export const Input: FC<InputProps> = (props) => {
  console.log(props)
  const { disabled, size, icon, prepand, append, style, ...restProps } = props
  const cnames = classNames('effie', {
    [`input-szie-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepand || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepand
  })
  return (
    <div className={cnames} style={style}>
      <input disabled={disabled} {...restProps} />
    </div>
  )
}

export default Input;

