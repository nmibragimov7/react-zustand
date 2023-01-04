import React from 'react';

import BaseButton from "../../base/BaseButton/BaseButton";
import {useFilter} from "../../../store";
import styles from './Filter.module.scss';

interface IProps {
    className?: string
}

const Filter: React.FC<IProps> = (props) => {
    const { className } = props;
    const { filter, setFilter } = useFilter();

    return (
        <div className={[styles.Filter, className].join(" ")}>
            <BaseButton
                disabled={filter === "all"}
                onClick={() => setFilter("all")}
            >All</BaseButton>
            <BaseButton
                disabled={filter === "uncompleted"}
                onClick={() => setFilter("uncompleted")}
            >Not completed</BaseButton>
            <BaseButton
                disabled={filter === "completed"}
                onClick={() => setFilter("completed")}
            >Completed</BaseButton>
        </div>
    );
};

export default Filter;
