import React from 'react'

interface IHellowProps {
  message?: string;
}

const Hello: React.FC<IHellowProps> = (props) => {
  return (
    <div>
      {props.message}
    </div>
  )
}

Hello.defaultProps = {
  message: '22222222'
}

export default Hello
