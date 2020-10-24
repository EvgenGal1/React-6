import React from 'react'
// импорт класса или объекта
import ReactDom from 'react-dom'
// отвечает за отображени в DOM

const app = document.querySelector('#app');

// импорт компонента Start.jsx
import Start from './components/Start/Start.jsx'

// 
ReactDom.render(
	// первое что, второе куда
	// задавать class в react в jsx то он назыв className 
	<div className="wrapper">
		{/* внутри div исползуем компонент Start и пробросываем в нутрь name  */}
		<Start name="John"/>
	</div>,
	// куда
	app
)

// // переменная с массивом ссылок
// let navLinks = ['About', 'Benefits', 'Cotacts']
// // верстка header по массиву
// // функция в которую пробросим массив
// function creareMenuItems(arr){
// 	// из неё возврашаем массив названий через метод map, чтоб получить title и каждый новый элемент нам будет возвращать элемент версти в <> а в них сам title
// 	return arr.map((title, i) => <li key = { i }><a>{ title }</a></li>)
// 	// чтоб небыло ошибок в консол изза раективности reacta, нежно каждому элементу возращаемого методом map, пробросить ему, его же индеск.
// 	// когда mapим то минимум индек элемента берем вторым параметром в функцию и сообщаем ее дальше в тег в его key (li). (минимум индекс, а так и id - для уникального индетификатора элемента на странице) 
// 	// return arr.map(title => <li><a>{ title }</a></li>)
// 	}

// // сам header 
// // внутри тегов находиться функция с проброшеным в неё массивом ссылок.
// let header = <header>
// 	<nav>
// 		{ creareMenuItems(navLinks) }
// 	</nav>
// </header>
// // на выходе получиться массив элементов (<li><a>{ title }</a></li>), которые будут встроены в div со всем остальным в общий DOM 

// // старый варик
// // let header = <header>
// // 	<nav>
// // 		<li><a>1</a></li>
// // 		<li><a>2</a></li>
// // 		<li><a>3</a></li>
// // 	</nav>
// // </header>

// let main = <main>
// 	<section>
// 		<h1>Hello</h1>
// 	</section>
// 	<section>
// 		<h1>React</h1>
// 	</section>
// </main>

// let footer = <footer>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nostrum maiores itaque, optio facere provident quibusdam earum iste ut error amet, numquam magni, atque quod. Eligendi fuga laudantium porro esse?</p>
// </footer>

// // метод с 2 параметрами. 1 - что мы хотим отрендарить (можем представлять в различных видах), 2 - где хотим отрендарить
// ReactDom.render(
// 	<div>
// 		{ header }
// 		{ main }
// 		{ footer }
// 	</div>, 
// 	app
// )