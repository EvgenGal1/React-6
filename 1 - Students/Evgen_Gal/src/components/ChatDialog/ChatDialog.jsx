import "./style.css";
import React, { Component, Fragment } from "react";

// 3.5 импорт PropTypes
import PropTypes from 'prop-types'
// импорт из https://material-ui.com/ru/components/dialogs/#dialog, для material-ui
//  для применен кастомных стилей на элемены. может не сработатьь из-за по умолчанию прописаного компонента в функц а не классе
import { makeStyles } from '@material-ui/core/styles';
// кнопка 
import Button from '@material-ui/core/Button';
// аватар отдельн компонент 
import Avatar from '@material-ui/core/Avatar';
// список
import List from '@material-ui/core/List';
// элемент списка
import ListItem from '@material-ui/core/ListItem';
// компонент под аватар, куда вставл аватар
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// отдельн компонент
import ListItemText from '@material-ui/core/ListItemText';
//
import DialogTitle from '@material-ui/core/DialogTitle';
// окно
import Dialog from '@material-ui/core/Dialog';
// заглушка под картинку
import PersonIcon from '@material-ui/icons/Person';
// "+" добавить 
import AddIcon from '@material-ui/icons/Add';
// лейбл
import Typography from '@material-ui/core/Typography';
//
import { blue } from '@material-ui/core/colors';

// 3.4 здесь будут чаты, будем пробрасывать пропами
const emails = ['username@gmail.com', 'user02@gmail.com'];

// функция от функциию вызов функц makeStyles и в неё проброс стили на не те классы которые нужны
const useStyles = makeStyles({
	// пишем назв класса и опис сво-ва. как в js
	'test-class': {
		fontSize: '2em',
		fontWeight: 'bold'
	}
})

// до 3.4
// export default class ChatDialog extends Component {
// 3.4 теперь класс не экспортируем
// после ввода функции SimpleDialog, класс закомитили
// class SimpleDialog extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 		};
// 	}

// 	handleClickOpen = () => {
// 		setOpen(true);
// 	};

// 	handleClose = (value) => {
// 		setOpen(false);
// 		setSelectedValue(value);
// 	};

// 	render() {
// 		// let { some } = this.state;

// 		return (
// 			<Fragment>
// 				<div className="ChatDialog">

// 				</div>
// 			</Fragment>
// 		);
// 	}
// }

function SimpleDialog(props) {
	// когда начинаем эту функц то можем объяв объект, и закинуть туда разультат выполнения этой функц. он вернёт объект с классом
	// чтобы сделать className ={classes['test-class']}. либо CamelCase `СтильВерблюда` но не факт что пройдёт
	const classes = useStyles();
	// объяв методов котор будут срабытывать в функц SimpleDialog
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value) => {
		onClose(value);
	};
	return (
		<Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
			<DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
			<List>
				{emails.map((email) => (
					<ListItem button onClick={() => handleListItemClick(email)} key={email}>
						<ListItemAvatar>
							<Avatar>
								<PersonIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={email} className={classes['test-class']} />
					</ListItem>
				))}

				<ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
					<ListItemAvatar>
						<Avatar>
							<AddIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Add account" />
				</ListItem>
			</List>
		</Dialog>
	)
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
};

// основн эксорт функц
//  в функц принимаем props
// предаем из ChatList propы contacts/contactList. дальше проброс в SimpleDialog, в виде propы, и на основе этого массива, в <ListItemAvatar></ListItemAvatar> можем отверстать список контактов
export default function SimpleDialogDemo(props) {
	// грубо говоря 2 метода (open, setOpen), набираються из reacta 
	const [open, setOpen] = React.useState(false);
	// метооды selectedValue(вовр выбраное значен из верстки выше) и setSelectedValue (закидывает значение процесса в selectedValue)
	const [selectedValue, setSelectedValue] = React.useState(emails[1]);

	// функц отвеч за открытие диалога
	const handleClickOpen = () => {
		setOpen(true);
	};

	// за закр диалога
	const handleClose = (value) => {
		setOpen(false);
		setSelectedValue(value);
	};

	// предаем из ChatList propы contacts/contactList
	console.log(props.contacts);

	// то что возвращ из модалки
	return (
		<div>
			{/* типография */}
			<Typography variant="subtitle1">Selected: {selectedValue}</Typography>
			<br />
			{/* кнопка */}
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open simple dialog
      </Button>
			<SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
		</div>
	);
}