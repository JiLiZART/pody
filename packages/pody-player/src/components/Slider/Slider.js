import {h} from "hyperapp"

import Handle from '../Handle/Handle'
import styles from './slider.css'

import {on, off, isElementMatch} from '../../helpers/dom'

const getCoords = e => ({
    x: e.pageX || e.clientX || e.changedTouches[0].pageX,
    y: e.pageY || e.clientY || e.changedTouches[0].pageY
});

const getWidth = e => {

};

const createSliderCreate = props => el => {
    let rect = el.getBoundingClientRect();
    let pointerDown = null;
    let startCoords = null;
    // console.log('rect', rect);

    const onPointerMove = e => {
        const pos = getCoords(e);

        if (pointerDown) {
            props.onMove && props.onMove({
                x: pos.x - startCoords.x,
                y: pos.y - startCoords.y,
            })
        }
    };

    const onPointerDown = e => {
        console.log('pointerdown');
        isElementMatch(el, e.path, () => {
            const pos = getCoords(e);

            pointerDown = true;
            startCoords = pos;

            props.onStart && props.onStart(pos);

            on('mousemove', onPointerMove, el);
            console.log('pointerdown.match');
        })
    };

    const onPointerUp = e => {
        console.log('pointerup');
        const pos = getCoords(e);

        if (pointerDown) {
            props.onEnd && props.onEnd({
                x: pos.x - startCoords.x,
                y: pos.y - startCoords.y,
            });
        }

        off('mousemove', onPointerMove, el);

        pointerDown = null;
        startCoords = null;
    };

    on('mousedown', onPointerDown);
    on('mouseup', onPointerUp)
};

const createSliderDestroy = props => el => {

};

const Slider = ({progress = 0, buffer = 0, loading = false, onStart, onMove, onEnd}) => (
    <div
        class={styles.slide}
        oncreate={createSliderCreate({onStart, onMove, onEnd})}
        ondestroy={createSliderDestroy({onStart, onMove, onEnd})}
    >
        <div class={styles.buffer} style={{width: `${buffer}%`}}/>
        <div class={styles.progress} style={{width: `${progress}%`}}>
            <Handle loading={loading}/>
        </div>
    </div>
);

export default Slider
