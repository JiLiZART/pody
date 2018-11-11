import {h} from 'hyperapp'

import styles from './volumeSlide.css'
import Slider from "../Slider/Slider";

const getVolume = state => (state.volume * 100);

const VolumeSlide = () => (state, actions) => (
    <div class={styles.volume}>
        <Slider progress={getVolume(state)} class={styles.slider} />
    </div>
);

export default VolumeSlide
