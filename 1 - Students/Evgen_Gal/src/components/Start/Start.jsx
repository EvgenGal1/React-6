import './style.css'

import React from 'react'
// 2. е/и делаем без ?стейтов?, то вызываем функц reactdom при каждои нажатиии на кнопку
import ReactDom from 'react-dom'
{/*         <comp nameStaticProp="John Doe" :propDynamic="peremennaya" /> //Vue
            <comp nameStaticProp="John Doe" propDynamic = { peremennaya } /> //React 
*/}

// 2. массив элементов. глобал переменная  
let arr = [];

// 2. в массив добавл текст
function getContent() {
	arr.push('Some text');
	ReactDom.render(
		<Messages messages={arr} />,
		document.querySelector('#test')
	)
}

// 2. принимаем пропы. 
function Messages(props) {
	let { messages } = props;
	// 2.делаем массив элементов который создается на основе массива сообшений которые мы MAPим, берем от туда текст, и пробрасываем его в тег <p> 
	let msgs = messages.map(text => <p>{text}</p>);
	// 2.загшлушка. возвр <div> с, е/и есть длина то - msgs? е/и нет - No messages
	return <div>
		{messages.length ? msgs : <h1>No messages</h1>}
	</div>
}

// 1.функция которую экспортируем, она выдаёт нам вёрстку
export default props => {
	let { name } = props;
	let count = 1;
	return (
		<div>
			{/* 2. */}
			<div id="test">
				<Messages messages={arr} />
			</div>
			<button onClick={getContent}>add</button>
			{/* 1.
			<h2>From component</h2>
         <p>Hello, { name }</p> */}
		</div>
	)
}