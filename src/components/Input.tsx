import React, { ChangeEvent } from 'react'

type InputProps = {
	value: string
	handleChange: (event: ChangeEvent<HTMLInputElement> ) => void
}

const Input = ({ value, handleChange }: InputProps) => {
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event);
	}
  return (
	<input type="text" value={value} onChange={handleChange}></input>
  )
}

export default Input