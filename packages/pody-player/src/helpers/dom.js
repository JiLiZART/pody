
export function find(query, container = document) {
    return container.querySelector(query)
}

export function findAll(query, container = document) {
    return [].slice.call(container.querySelectorAll(query))
}

export function on(eventName, callback, container = document) {
    return container.addEventListener(eventName, callback)
}

export function off(eventName, callback, container = document) {
    return container.removeEventListener(eventName, callback)
}
