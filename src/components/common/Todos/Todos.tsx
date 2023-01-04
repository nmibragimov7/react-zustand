import React from 'react';
import shallow from 'zustand/shallow';

import Todo from "../Todo/Todo";
import BaseButton from "../../base/BaseButton/BaseButton";
import {TodoProps} from "../../../model/types";
import {useFilter, useTodos} from "../../../store";
import styles from './Todos.module.scss';

interface IProps {
    className?: string;
}

const Todos: React.FC<IProps> = (props) => {
    const { className } = props;
    const filter = useFilter(state => state.filter);
    const todos: TodoProps[] = useTodos(state => {
        switch (filter) {
            case "completed": return state.todos.filter(todo => todo.completed);
            case "uncompleted": return  state.todos.filter(todo => !todo.completed);
            default: return state.todos;
        }
    });
    const { loading, error, fetchTodos } = useTodos(state => ({
        loading: state.loading,
        error: state.error,
        fetchTodos: state.fetchTodos
    }), shallow); // shallow останавливает перерендование компонента

    return (
        <>
            <div className={"flex justify-center"}>
                <BaseButton disabled={loading} className={"!bg-gray-100 !text-dark max-w-xs mx-auto mb-8"} onClick={fetchTodos}>
                    {!error ? "Get todos" : error}
                </BaseButton>
            </div>
            <div className={[styles.Todos, className].join(" ")}>
                {todos.map((todo: TodoProps) => (
                    <Todo key={todo.id} item={todo}/>
                ))}
            </div>
        </>
    );
};

export default Todos;
