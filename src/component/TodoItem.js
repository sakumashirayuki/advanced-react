import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props){
	const { content, deleteItem, index }  = props;

	const handleClick = function () {
		deleteItem(index);
	};

	return (
		<div onClick={handleClick}>
			{content}
		</div>
	);
}

TodoItem.propTypes = {
	content: PropTypes.string,
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

// const areEqual = (prevProps, nextProps) => true; // never re-render

const MemomizedTodoItem = React.memo(TodoItem);
 
export default MemomizedTodoItem;