import React, {CSSProperties} from 'react'

type ContainerProps = {
	styles: CSSProperties
}

const Container = (props: ContainerProps) => {
  return (
	<div style ={{border: '1px solid black', padding: '1rem' }}>Text goes here</div>
  )
}

export default Container