import {h} from 'hyperapp'

import styles from './volumeSlide.css'
import Slider from "../Slider/Slider";

const VolumeSlide = () => (state, actions) => (
    <div class={styles.volume}>
        <Slider progress={state.volume} class={styles.slider} />
    </div>
);

export default VolumeSlide
