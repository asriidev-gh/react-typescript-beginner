import React, { MouseEvent } from 'react';

type ButtonProps = {
	handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: ButtonProps) => {
  return (
	<button onClick={event => props.handleClick(event, 1)}>Click</button>
  )
}

export default Button