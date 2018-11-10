import { h } from "hyperapp"

import styles from './trackTitle.css'

const TrackTitle = ({ id, text }) => (
    <div class={styles.title}>
        {text}
    </div>
);

export default TrackTitle
