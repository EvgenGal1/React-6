import './style.css'
import React from 'react'

// 2. экспор функц которая принимает пропы 
export default props => {
	// 2. достаем из проп кто `оттправитель` смс и текст
	let { sender, text } = props;
	// 2. возвращ вёртску. сложн вёрстку возвращать в скобках чтоб не было потерь
	return (
		<div className="d-flex flex-column msg">
			<strong>{sender}</strong>
			{/* возвращ это смс в Messages.jsx */}
			<p>{text}</p>
		</div>
	)
}