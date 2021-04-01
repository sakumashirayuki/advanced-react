import React, { useState, useEffect, useCallback, useRef,Fragment } from 'react';
import axios from "axios"

import TodoItem from './TodoItem';
import './style.css';

function TodoList(){
	const [state, setState] = useState({inputValue: '', list: []});
	const textInput = useRef(null);

	// useEffect(()=>{
	// 	axios.get('/api/todolist')
	// 	.then(()=>alert('succ'))
	// 	.catch(()=>alert('error'));
	// }, []);

	const getTodoItem = function () {
		return state.list.map((item, index) => {
			return (
				<TodoItem 
					key={index}
					content={item} 
					index={index}
					deleteItem={handleItemDelete}
				/>
			)
		})
	}

	const handleInputChange = function() {
		const value = textInput.current.value;
		setState((preState) => ({
			...preState,
			inputValue: value
		}));
	}

	const handleBtnClick = function () {
		setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}));
	}

	const handleItemDelete = useCallback(function(index) {
		setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {...prevState, list};
		});
	});
	return (
		<Fragment>
			<div>
				<label htmlFor="insertArea">输入内容</label>
				<input 
					id="insertArea"
					className='input'
					value={state.inputValue}
					onChange={handleInputChange}
					ref={textInput}
				/>
				<button onClick={handleBtnClick}>提交</button>
			</div>
			<ul>
				{getTodoItem()}
			</ul>
		</Fragment>
	)
}

export default TodoList;