import {h} from "hyperapp"

import styles from './trackTime.css'
import {format} from "../../helpers/time";

const TrackTime = () => (state, actions) => (
    <div class={styles.time}>
        <div class={styles.current}>{format(state.currentTime)}</div>
        <div class={styles.total}>{format(state.duration)}</div>
    </div>
);

export default TrackTime
