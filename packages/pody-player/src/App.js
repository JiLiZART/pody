import {h} from 'hyperapp';

import cn from 'classnames'
import TrackTitle from './components/TrackTitle/TrackTitle';
import Slider from './components/Slider/Slider';
import TrackTime from './components/TrackTime/TrackTime';

import styles from './index.css'
import VolumeSlide from "./components/VolumeSlide/VolumeSlide";
import VolumeControls from "./components/VolumeControls/VolumeControls";
import PlayControls from "./components/PlayControls/PlayControls";
import SpeedControl from "./components/SpeedControl/SpeedControl";
import TrackSlide from "./components/TrackSlide/TrackSlide";


const App = (state, actions) => (
    <div class={cn(styles.player, styles.themeLight)}>
        <div class={styles.info}>
            <PlayControls/>
            <TrackTitle text={state.title} />
            <TrackTime current="0:02" total="9:54"/>
        </div>

        <div class={styles.bars}>
            <TrackSlide class={styles.track} />
            <SpeedControl class={styles.speed} />
            <VolumeControls />
            <VolumeSlide class={styles.volume} />
        </div>
    </div>
);

export default App
