import {h} from "hyperapp"
import Control from "../Control/Control";

import speedStates from "../../constants/speedStates";
import styles from './speedControl.css'

const SpeedControl = () => (state, actions) => (
    <div class={styles.control}>
        <Control
            text={`x${state.playbackRate}`}
            isBlock
            textAlignRight
            disabled={!state.playing}
            onClick={() => actions.playbackRate(speedStates[state.playbackRate])}
        />
    </div>
);

export default SpeedControl
