import {h} from 'hyperapp';

import cn from 'classnames'
import TrackTitle from './components/TrackTitle/TrackTitle';
import TrackTime from './components/TrackTime/TrackTime';

import VolumeSlide from "./components/VolumeSlide/VolumeSlide";
import VolumeControls from "./components/VolumeControls/VolumeControls";
import PlayControls from "./components/PlayControls/PlayControls";
import SpeedControl from "./components/SpeedControl/SpeedControl";
import TrackSlide from "./components/TrackSlide/TrackSlide";
import styles from './app.css'


const App = (state, actions) => (
    <div class={cn(styles.player, styles.themeLight)}>
        <PlayControls/>
        <TrackTitle text={state.title}/>
        <TrackSlide class={styles.track}/>
        <TrackTime />
        <SpeedControl class={styles.speed}/>
        <VolumeControls/>
        <VolumeSlide class={styles.volume}/>
    </div>
);

export default App
