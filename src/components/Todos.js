import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTodos } from "../redux/actions/todoAction";
import { Link, useParams } from "react-router-dom"

const Todos = () => {
    const id = useParams();

    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [])

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}><Link to={`/`}>{todo.name}</Link></li>
            ))}
        </ul>
    );
}

export default Todos;