import {h} from "hyperapp"

import Slider from "../Slider/Slider";
import styles from './trackSlide.css'

const test = name => pos => {
    console.log(name, pos)
};

const getProgress = state => ((state.currentTime / state.duration) * 100);

const TrackSlide = () => (state, actions) => (
    <div class={styles.track}>
        <Slider
            onStart={test('start')}
            onMove={test('move')}
            onEnd={test('end')}
            buffer={25}
            progress={getProgress(state)}
            loading={state.loading}
            class={styles.slide}
        />
    </div>
);

export default TrackSlide
