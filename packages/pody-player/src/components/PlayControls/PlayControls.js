import {h} from "hyperapp"
import Control from "../Control/Control";

import styles from './playControls.css'

const PlayControls = () => (state, actions) => (
    <div class={styles.controls}>
        <Control icon="replay-5" title="Replay to 5 sec" disabled={!state.playing} />
        {state.playing && <Control icon="pause" title="Pause" onClick={() => actions.pause()} />}
        {!state.playing && <Control icon="play" title="Play" onClick={() => actions.play()} />}
        <Control icon="forward-5" title="Forward to 5 sec" disabled={!state.playing}/>
    </div>
);

export default PlayControls;
