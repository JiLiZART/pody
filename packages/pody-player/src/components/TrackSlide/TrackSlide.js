import {h} from "hyperapp"

import Slider from "../Slider/Slider";
import styles from './trackSlide.css'

const TrackSlide = () => (state, actions) => (
    <div class={styles.track}>
        <Slider buffer={25} progress={15} loading={state.loading} class={styles.slide} />
    </div>
);

export default TrackSlide
