import React from 'react';

import styles from './BaseButton.module.scss';

interface IProps {
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const BaseButton: React.FC<IProps> = (props) => {
    const { disabled = false, className, children, onClick } = props;

    return (
        <button
            disabled={disabled}
            className={[styles.BaseButton, className].join(" ")}
            onClick={onClick}
        >
            { children }
        </button>
    );
};

export default BaseButton;
