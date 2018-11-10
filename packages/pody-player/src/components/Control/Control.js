import {h} from "hyperapp"
import cn from 'classnames'

import Icon from "../Icon/Icon";
import styles from './control.css'

const Control = ({title, text, icon, disabled, isBlock, textAlignRight, onClick}) => (
    <button
        type="button"
        class={cn(styles.control, {
            [styles.block]: isBlock,
            [styles.textAlignRight]: textAlignRight,
        })}
        title={title}
        disabled={disabled}
        onclick={onClick}
    >
        {icon && <Icon name={icon}/>}
        {title && <span class={styles.srOnly}>{title}</span>}
        {text && <span class={styles.text}>{text}</span>}
    </button>
);

export default Control
