import icons from './icons';

const iconsEl = document.createElement('div');

export default () => {
    document.body.appendChild(iconsEl);
    iconsEl.outerHTML = icons;
}
