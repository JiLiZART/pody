import {h} from "hyperapp"
import Control from "../Control/Control";

import speedStates from "../../constants/speedStates";
import styles from './speedControl.css'

const SpeedControl = () => (state, actions) => (
    <div class={styles.control}>
        <Control
            text={`x${state.speed}`}
            isBlock
            textAlignRight
            disabled={!state.playing}
            onClick={() => actions.speed(speedStates[state.speed])}
        />
    </div>
);

export default SpeedControl
