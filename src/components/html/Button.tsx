import React from 'react'

// type ButtonProps = {
// 	variant: 'primary' | 'secondary'
// } & React.ComponentProps<'button'>

// To omit children limited to string
type ButtonProps = {
	variant: 'primary' | 'secondary'
	children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

const CustomButton = ({variant, children, ...rest} : ButtonProps) => {
  return (
	<div><button className={`class-with-${variant}`} {...rest}>{children}</button></div>
  )
}

export default CustomButton