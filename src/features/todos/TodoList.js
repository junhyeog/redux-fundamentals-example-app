import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import TodoListItem from './TodoListItem';

const selectTodoIds = (state) => state.todos.map((todo) => todo.id);
const selectFilters = (state) => state.filters;

const TodoList = () => {
	const todoIds = useSelector(selectTodoIds, shallowEqual);
	const filters = useSelector(selectFilters);
	const renderedListItems = todoIds.map((todoId) => {
		return <TodoListItem key={todoId} id={todoId} filters={filters} />;
	});

	return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
