import {h} from "hyperapp"

import styles from './trackTime.css'

const TrackTime = ({total, current}) => (
    <div class={styles.time}>
        <div class={styles.current}>{current}</div>
        <div class={styles.total}>{total}</div>
    </div>
);

export default TrackTime
