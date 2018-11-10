import {h} from "hyperapp"
import styles from './icon.css'
import {find} from "../../helpers/dom";

const SvgIcon = ({name}) => {
    const el = find(`#pody-${name}`);

    return h('svg', {
        role: 'presentation',
        focusable: 'false',
        viewBox: el.getAttribute('viewBox'),
        oncreate: ref => {
            ref.innerHTML = el.innerHTML
        },
        onupdate: ref => {
            ref.innerHTML = el.innerHTML
        }
    })
};

const Icon = ({name}) => (
    <span class={styles.icon}><SvgIcon name={name}/></span>
);

export default Icon
