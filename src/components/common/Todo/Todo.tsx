import React from 'react';

import BaseCheckbox from "../../base/BaseCheckbox/BaseCheckbox";
import {TodoProps} from "../../../model/types";
import styles from './Todo.module.scss';
import {useTodos} from "../../../store";

interface IProps {
    item: TodoProps;
    className?: string;
}

const Todo: React.FC<IProps> = (props) => {
    const toggleTodo = useTodos(state => state.toggleTodo);
    const {
        item,
        className
    } = props;

    return (
        <div className={[styles.Todo, className].join(" ")}>
            <BaseCheckbox name={`todo-${item.id}`} value={item.completed} setValue={() => toggleTodo(item.id)}>
                {item.title}
            </BaseCheckbox>
        </div>
    );
};

export default Todo;
