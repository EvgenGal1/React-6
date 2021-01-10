const fs = require("fs");
const path = require("path");

// функ-ия принимает название компонента из вне(из строчки которую напишем в консоли). Она её принимает, создаёт строку в ``, куда пробрасывает в div classname назв компонента. Далее вызывает функц writeFileSync (`записать файл синхрон`), записывает файла по опред адресу (../src/components/'componentName'/'componentName'.jsx) и в этот файл вписывает то что в ``(const content).
module.exports = (componentName) => {
  const content = `
			import "./style.css";
			import React, { Component, Fragment } from "react";
			
			export default class ${componentName} extends Component {
				constructor(props) {
					super(props);
					this.state = {
					};
				}
				
				componentDidMount() {
				}

				componentDidUpdate() {
				}

				render() {
					// let { some } = this.state;
					
					return (
						<Fragment>
							<div className="${componentName}"></div>
						</Fragment>
					);
				}
			}`;
  fs.writeFileSync(
    path.resolve(
      __dirname,
      "..",
      "..",
      "src",
      "components",
      componentName,
      `${componentName}.jsx`
    ),
    content
  );
};
