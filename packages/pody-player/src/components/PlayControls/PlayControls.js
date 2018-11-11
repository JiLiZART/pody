import {h} from "hyperapp"
import Control from "../Control/Control";

import styles from './playControls.css'

const getReplay5Sec = state => (state.currentTime ? state.currentTime - 5: 0);
const getForward5Sec = state => (state.currentTime ? state.currentTime + 5: 0);

const PlayControls = () => (state, actions) => (
    <div class={styles.controls}>
        <Control
            icon="replay-5"
            title="Replay to 5 sec"
            disabled={!state.playing}
            onClick={() => actions.seek(getReplay5Sec(state))}
        />
        {state.playing && <Control
            icon="pause"
            title="Pause"
            onClick={() => actions.pause()}
        />}
        {!state.playing && <Control
            icon="play"
            title="Play"
            onClick={() => actions.play()}
        />}
        <Control
            icon="forward-5"
            title="Forward to 5 sec"
            disabled={!state.playing}
            onClick={() => actions.seek(getForward5Sec(state))}
        />
    </div>
);

export default PlayControls;
