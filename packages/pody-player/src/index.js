import {app} from 'hyperapp';

import App from './App'
import injectIcons from './components/Icon/inject';
import {findAll, on} from "./helpers/dom";

injectIcons();

const AUDIO_STATE = {
    NONE: 0,
    LOADING: 1,
    LOADED: 2,
    ERROR: 3,
};

const elems = findAll('.pody-player');

const players = elems.map(el => {
    const url = el.href || el.src || el.dataset.url;
    const title = el.title || el.innerText;
    const mountEl = document.createElement('div');

    mountEl.className = el.className;

    const audio = new window.Audio(url);

    audio.preload = 'none';

    const state = {
        url,
        title,
        canplay: false,
        loading: false,
        playing: false,
        muted: audio.muted,
        volume: audio.volume,
        playbackRate: audio.playbackRate,
        currentTime: audio.currentTime,
        duration: 0,
    };

    const actions = {
        play: () => () => {
            audio.play();
            audio.volume = 0.1;

            return ({
                playing: true,
            })
        },

        pause: () => () => {
            audio.pause();

            return ({
                playing: false,
            })
        },

        volume: value => state => {
            audio.volume = parseFloat(value, 10);

            return ({
                volume: value
            })
        },

        seek: value => state => {
            console.log('seek', value);
            audio.pause();
            if (audio.fastSeek) {
                audio.fastSeek(parseFloat(value, 10))
            } else {
                audio.currentTime = parseFloat(value, 10);
            }
            audio.play();
        },

        mute: value => state => {
            audio.muted = Boolean(value);

            return ({
                muted: audio.muted
            })
        },

        playbackRate: value => state => {
            audio.playbackRate = parseFloat(value, 10);

            return ({
                playbackRate: value
            })
        },

        speed: value => state => ({
            playbackRate: value
        }),

        duration: value => state => ({
            duration: value
        }),

        currentTime: value => state => ({
            currentTime: value
        }),

        loading: value => state => ({
            loading: value
        })
    };

    const wiredActions = app(state, actions, App, mountEl);

    el.parentNode.replaceChild(mountEl, el);

    on('canplay', e  => {
        console.log('audio.canplay', e);
        wiredActions.duration(audio.duration);
    }, audio);

    on('canplaythrough', e  => {
        console.log('audio.canplaythrough', e);
        wiredActions.loading(false);
    }, audio);

    on('play', e  => {
        console.log('audio.play', e);
        wiredActions.loading(true);
    }, audio);

    on('timeupdate', e => {
        wiredActions.currentTime(audio.currentTime)
    }, audio);

    on('volumechange', e => {
        console.log('audio.volumechange', );
        wiredActions.volume(audio.volume)
    }, audio);

    on('statechange', e => {
        console.log('audio.statechange', e)
    }, audio);

    on('ratechange', e => {
        console.log('audio.ratechange', e)
    }, audio);

    on('loadstart', e => {
        console.log('audio.load', e);
    }, audio);

    on('load', e => {
        console.log('audio.load', e);
    }, audio);

    on('loadend', e => {
        console.log('audio.loadend', e);
    }, audio);


    return wiredActions
});
