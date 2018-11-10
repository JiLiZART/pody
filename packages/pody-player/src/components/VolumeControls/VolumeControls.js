import {h} from 'hyperapp'
import Control from "../Control/Control";

import styles from './volumeControls.css'

const VolumeControls = () => (state, actions) => {
    console.log('state', state, actions);
    return (
        <div class={styles.controls}>
            {state.muted && <Control icon="volume-mute" title="Unmute" onClick={() => actions.mute(false)}/>}
            {!state.muted && <Control icon="volume-up" title="Mute" onClick={() => actions.mute(true)}/>}
        </div>
    )
};

export default VolumeControls
