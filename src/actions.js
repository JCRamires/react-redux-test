export const ADD_GAME_FORMAT = 'ADD_GAME_FORMAT'
export const REMOVE_GAME_FORMAT = 'REMOVE_GAME_FORMAT'

export function addGameFormat(gameFormat) {
    return {type: ADD_GAME_FORMAT, gameFormat}
}

export function removeGameFormat(gameFormat) {
    return {type: REMOVE_GAME_FORMAT, gameFormat}
}
