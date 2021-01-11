import "./style.css";
import React, { Component, Fragment } from "react";
// 3.4
import ChatDialog from '../ChatDialog/ChatDialog.jsx'

export default class ChatList extends Component {
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

		// временно. contactList проброс в ChatDialog в виде props 
		let contactList = ['Ivanych', 'Stepan', 'Aleksey'];

		return (
			<Fragment>
				<div className="ChatList d-flex flex-column">
					<ul>
						<li>
							<a href="#">Chat 1</a>
						</li>
						<li>
							<a href="#">Chat 2</a>
						</li>
						<li>
							<a href="#">Chat 3</a>
						</li>
					</ul>
					<div>
						{/* в contacts передаем contactList */}
						<ChatDialog contacts={contactList} />
					</div>
				</div>
			</Fragment>
		);
	}
}