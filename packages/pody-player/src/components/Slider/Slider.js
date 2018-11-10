import {h} from "hyperapp"

import Handle from '../Handle/Handle'
import styles from './slider.css'

import {on, off} from '../../helpers/dom'

const getCoords = e => {
    const cords = {};
    cords.x = e.pageX || e.clientX || e.changedTouches[0].pageX;
    cords.y = e.pageY || e.clientY || e.changedTouches[0].pageY;

    return cords
};

const onPointerDown = (props, el, e) => {
    const pos = getCoords(e);
};

const onPointerUp = (props, el, e) => {
    const pos = getCoords(e);
};

const onSliderCreate = props => el => {
    console.log('onSliderCreate', props, el);
    on('mousedown', e => onPointerDown(props, el, e), el);
    on('mouseup', e => onPointerUp(props, el, e), el)
};

const onSliderDestroy = props => el => {

};

const Slider = ({progress = 0, buffer = 0, loading = false, onStart, onMove, onEnd}) => (
    <div
        class={styles.slide}
        oncreate={onSliderCreate({onStart, onMove, onEnd})}
        ondestroy={onSliderDestroy({onStart, onMove, onEnd})}
    >
        <div class={styles.buffer} style={{width: `${buffer}%`}}/>
        <div class={styles.progress} style={{width: `${progress}%`}}>
            <Handle loading={loading} />
        </div>
    </div>
);

export default Slider
