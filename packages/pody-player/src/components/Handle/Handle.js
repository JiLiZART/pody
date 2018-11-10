import {h} from "hyperapp"
import cn from 'classnames'
import styles from './handle.css'

const Handle = ({loading}) => (
    <button
        type="button"
        class={cn(styles.handler, {
            [styles.loading]: loading
        })}
    />
);

export default Handle
