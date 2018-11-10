import {app} from 'hyperapp';

import App from './App'
import injectIcons from './components/Icon/inject';
import {findAll} from "./helpers/dom";

const actions = {
    down: value => state => ({
        count: state.count - value
    }),

    up: value => state => ({
        count: state.count + value
    }),

    play: () => () => ({
        playing: true,
    }),

    pause: () => () => ({
        playing: false,
    }),

    volume: value => state => ({
        volume: value
    }),

    mute: muted => state => ({
        muted,
    }),

    speed: value => state => ({
        speed: value
    }),
};

injectIcons();

const elems = findAll('.pody-player');

const players = elems.map(el => {
    const url = el.href || el.dataset.url;
    const title = el.title || el.innerText;
    const mountEl = document.createElement('div');

    mountEl.className = el.className;

    const state = {
        count: 0,
        url,
        title,
        loading: true,
        playing: false,
        muted: false,
        volume: 10,
        speed: 1,
    };

    const happ = app(state, actions, App, mountEl);

    el.parentNode.replaceChild(mountEl, el);

    return happ
});
