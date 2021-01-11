// импорт класса или объекта
import React from 'react'
// отвечает за отображени в DOM
import ReactDom from 'react-dom'
// импорт бутстрап
import 'bootstrap'
// импорт класса бутстрапа
import 'bootstrap/dist/css/bootstrap.min.css'
// 3.2 импорт material-ui
import { StylesProvider } from '@material-ui/core/styles'

const app = document.querySelector('#app');

// 2. импорт Messages
import Messages from './components/Messages/Messages.jsx'
// 3.3 импорт ChatList
import ChatList from './components/ChatList/ChatList.jsx'

// 1. метод с 2 параметрами. 1 - что мы хотим отрендарить (можем представлять в различных видах), 2 - где хотим отрендарить
ReactDom.render(
	// 3.2 оборачиваем в material-ui 
	<StylesProvider>
		{/* // 3.2 Добавляем стили через material-ui. До был className="wrapper" */}
		<div className="wrapper d-flex w-100 justify-content-center">
			{/* 3.3 Добавл ChatList */}
			<ChatList />
			<Messages />
		</div>
	</StylesProvider>,
	app
)


// let navLinks = ['About', 'Benefits', 'Contacts'];

// function createMenuItems(arr) {
//     return arr.map((title, i) => <li key = { i }><a>{ title }</a></li>)
// }

// let header = <header>
//     <nav>
//         { createMenuItems(navLinks) }
//     </nav>
// </header>

// let header = <header>
//     <nav>
//         <li><a>1</a></li>
//         <li><a>2</a></li>
//         <li><a>3</a></li>
//     </nav>
// </header>

// let main = <main>
//     <section>
//         <h1>Hello</h1>
//     </section>
//     <section>
//         <h1>React</h1>
//     </section>
// </main>

// let footer = <footer>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum molestiae neque illum corporis minus repudiandae accusamus natus mollitia. Accusantium adipisci dolor officia quibusdam dicta obcaecati odit a ratione nemo ducimus.</p>
// </footer>

// ReactDom.render(
//     <div>
//         { header }
//         { main }
//         { footer }
//     </div>,
//     app
// )