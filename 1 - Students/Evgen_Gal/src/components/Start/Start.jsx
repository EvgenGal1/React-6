// загружаем стили.  
import './style.css'

// импорт сюда React 
import React from 'react'
// компоненты бывают 2 видов. Static состояние- набор реактивных данных, опираясь на которые, если вводим их в верстку данного компонента, то верстка данного компонента будет меняться, в зависимости от изменений этих данных
// похожи на дейта из vue. разная механика
// stateLas компонент отвечает за верстку а не за логику. он экспортирует функцию которая будет возвращать некую верстку
// компонент props передаються в компонент по умолчанию в этой функц. это объект, поля которого по умолчанию не описываем и не указываем (в дальнейшем с помошью модуля proptipe которые помогут описывать. у vue из начально приобъявлении компонента есть возможность прописать propы чтоб ссылаться на них в верстке)
{/* 	пробрасываем prop снаружи 	
		<comp nameStaticProp="John Doe" :propDynamic='peremennaya'/> // Vue
		<comp nameStaticProp="John Doe" propDynamic = { peremennaya }/> // React 
*/}
export default props => {
	// первый вариант проброски. деструкторируем propы , забираем из них соответсвующую переменую(name) из поля propert. написать props и использовать её. стандартный  вариант. 
	let { name } = props;
	return(
	<div>
		<h2>From component</h2>
		{/* name будет приходить в качестве изменяемого данного. а берег его выше */}
		<p>Heloo, { name }</p>
		{/* <p>Heloo, { props.name }</p> // второй вариант добавления. prop будет приходить посколько она уже проброшена*/}
	</div>)
}

{/*         <comp nameStaticProp="John Doe" :propDynamic="peremennaya" /> //Vue
            <comp nameStaticProp="John Doe" propDynamic = { peremennaya } /> //React 
*/}

// 
export default props => {
    let { name } = props;
    return (
        <div>
            <h2>From component</h2>
            <p>Hello, { name }</p>
        </div>
    )
}