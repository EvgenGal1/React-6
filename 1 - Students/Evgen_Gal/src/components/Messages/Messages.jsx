// 2. statefull компонент
import './style.css'
import React, { Component } from 'react'

// 2. импорт компонентов	
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
				// 2. поля получателя и текст 
				{ sender: 'Bot', text: '...' },
				{ sender: 'Me', text: 'Some text 1' },
				{ sender: 'Me', text: 'Some text2' },
				{ sender: 'Bot', text: '...' },
			],
			// 2. - до ChatInput.jsx. Чтоб добавлять осмысленный текст
			// text: ''
		}
	}

	// 2. функция для кнопки, которая добавляет смс. в state добавит ещё один объект - sender и text. Так как в ребенка(ChatInput.jsx) сбиндили метод, то из-за отсутствия здесь text. Мы будем получать его пир помощи txt. Кидать его будем из ChatInput.jsx когда будем вызывать метод send и ссылатся на this.state.text
	sendMessage = txt => {
		// 2. для сокращения. чтоб не писать каждый раз this.state.messages
		// 2. - до ChatInput.jsx. let { messages, text } = this.state;
		let { messages } = this.state;
		// 2. а) когда создаем методы класса нужно биндить выполнение метода на контекст самого компонента. либо сами по себе методы делать стрелочными функциями(`sendMessage = () => {`). касается только самописных методов. это всё рвноне раб, потому что при этом надо постояно вызывать перерендер. со стейтами там делать не стоит
		// this.state.messages.push({ sender: 'Me', text: 'some' })
		// conso.log(this.state.messages);
		// 2. б)  ?функция для каждого класса компонента(встроеная)?. принимает объект хранилища и то что хотим туда добавить. messages(е/и хотим изменить поле messages то добавляем): [...this.state.messages(взять что было в предыдущей версии массива, изначалоно), { sender: 'Me', text: txt }(добавляем туда то что мы хотим)]. при таком подходе добавление в state будет постояно добавять смс, отрабытывает reactивность основаная на mapинге массива сообщений
		this.setState({
			// 2. в {} - text: this.state.text - до ChatInput.jsx
			messages: [...messages, { sender: 'Me', text: txt }],
			// 2. - до ChatInput.jsx. Чтоб обнулялся тект при отправке смс. Текст будет обрабатыватся в ChatInput.jsx
			// text: ''
		})
	}

	// 2. хуки жизненого цикла - особые события внутри компонента. встроеные как render. можно выхватить при написании `component` на уровне render. 
	// 2. `компонент смонтирован`. При отработке компонента можно что нить сделать (запроссделать, обратиться  кхринилищу и тд. и тп.)
	componentDidMount() {
		console.log('MOUNTED')
	}

	// 2. `компонент обновился`
	//? 2. ДЗ
	//? В componentDidUpdate организоать чтоб при написании смс должен отвечать бот с задержкой(setState добавление message)
	componentDidUpdate() {
		console.log('updated')
		//? 2. here bot adds message (здесь бот добавляет сообщение)
	}

	// 2.  - до ChatInput.jsx. когда будем менять текст , то input пробрасываем evt
	// changeText = evt => {
	// 2. - до ChatInput.jsx
	// let { text } = this.state;
	// 	let val = evt.target.value;
	// 2. т.к. меняем только текст то тишем только text
	// 	this.setState({ text: val })
	// };

	// 2. функц render созд массив на основе массива смс
	render() {
		// 2. ссылаемся на this.state - то что достунпо по ссылку через this внутри всего нашего класса
		// 2. let { messages, text } - до ChatInput.jsx
		let { messages } = this.state;
		// 2. созд массив на основе массива смс
		let messagesArray = messages.map((msg, i) => <Message sender={msg.sender} text={msg.text} key={i} />);

		// 2. возвращает всю верстку из компонента-класса
		return (
			<div className="d-flex flex-column align-items-center">
				<div className="msg-wrap">
					{messagesArray}
				</div>
				{/* 2. - до ChatInput.jsx
				<div>
					Чтоб добавить текст у атрибута value, который для него работает как prop. берем text из state и завязываем на value. что поменять state в react нужно завести обработку события onChange
					<input type="text" value={text} onChange={this.changeText} />
					<button onClick={this.sendMessage}>Send</button>
				</div> */}
				{/* 2. У ChatInput заводим propу send в который пробросим this.sendMessage. Тем самым забиндим propу send родительский метод sendMessage */}
				<ChatInput send={this.sendMessage} />
			</div>
		)
	}
}