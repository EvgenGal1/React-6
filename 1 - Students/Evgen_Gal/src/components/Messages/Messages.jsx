import './style.css'
import React, { Component } from 'react'

import Message from '../Message/Message.jsx'

import ChatInput from '../ChatInput/ChatInput.jsx'

// 2. экспорт класса Messages, который расширяет Component(?подклас? экспорт понятия компонент statefull)
export default class Messages extends Component {
	// 2. в контруктор пробрасываем пропы
	constructor(props) {
		// 2. пропы идут в суперкласс 
		super(props);
		// 2.  заводиться поле state - объект
		this.state = {
			// 2. поле messages - массив объектов
			messages: [
				// 2. поля получат и тектом 
				{ sender: 'Bot', text: '...' },
				{ sender: 'Me', text: 'Some text 1' },
				{ sender: 'Me', text: 'Some text2' },
				{ sender: 'Bot', text: '...' },
			]
		}
	}

	// 2.
	sendMessage = txt => {
		let { messages } = this.state;
		this.setState({
			messages: [...messages, { sender: 'Me', text: txt }],
		})
	}

	// 2.
	componentDidMount() {
		console.log('MOUNTED')
	}

	// 2.
	componentDidUpdate() {
		console.log('updated')
		//here bot adds message
	}

	// 2.
	render() {
		let { messages } = this.state;
		let messagesArray = messages.map((msg, i) => <Message sender={msg.sender} text={msg.text} key={i} />);

		// 2.
		return (
			<div className="d-flex flex-column align-items-center">
				<div className="msg-wrap">
					{messagesArray}
				</div>
				<ChatInput send={this.sendMessage} />
			</div>
		)
	}
}