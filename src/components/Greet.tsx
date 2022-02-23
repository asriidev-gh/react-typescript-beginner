import React from 'react';

type Greet = {
	name: string,
	messageCount: number,
	isLoggedIn: boolean
}

const Greet = (props:Greet) => {
  return (
	<div>
		<h2>
	{
		props.isLoggedIn
		? `Welcome ${props.name} you have ${props.messageCount} unread messages`
		: 'Welcome Guest'
	} 
  </h2>
  </div>
  )
}

export default Greet