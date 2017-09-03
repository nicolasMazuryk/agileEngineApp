import 'whatwg-fetch'
import config from '../../../config'

const {development: {domain, port}} = config

export const createReducer = (initial, handlers) => {
  return (state = initial, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}

export const request = (path, ...rest) => {
  return fetch(`http://${domain}:${port}/api/v1${path}`, ...rest)
    .then(response => response.json())
}
