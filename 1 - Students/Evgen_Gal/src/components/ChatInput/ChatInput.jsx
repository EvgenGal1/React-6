// 2. statefull компонент (конструктор)
import './style.css'
import React, { Component } from 'react'

export default class ChatInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// 2. Чтоб обнулялся тект при отправке смс.
			text: ''
		}
	}

	changeText = evt => {
		let val = evt.target.value;
		this.setState({ text: val });
	}

	send = () => {
		// 2. При вызове метода send, вызываем this.props.send. this.state.text отправляет текст выше к родителю
		this.props.send(this.state.text); //работает метод из родителя
		// 2. обноление
		this.setState({ text: '' });
	}

	render() {
		let { text } = this.state;
		return (
			<div>
				<input type="text" value={text} onChange={this.changeText} />
				{/* 2. заводим метод send  */}
				<button onClick={this.send}>Send</button>
			</div>
		)
	}
}