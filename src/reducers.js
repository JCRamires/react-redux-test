import {combineReducers} from 'redux'
import {ADD_GAME_FORMAT, REMOVE_GAME_FORMAT} from './actions'

function gameFormatsReducer(state = {standard: true, modern: false, legacy: false, commander: false}
    , action) {

    const newState = {...state}
    switch (action.type) {
        case ADD_GAME_FORMAT:
            newState[action.gameFormat] = true
            return newState
        case REMOVE_GAME_FORMAT:
            newState[action.gameFormat] = false
            return newState
        default:
            return state
    }
}
function colorsReducer(state = {colors: []}, action) {
    return state
}
function cardTypesReducer(state = {cardTypes: []}, action) {
    return state
}
function raritiesReducer(state = {rarities: []}, action) {
    return state
}

const cardSearchApp = combineReducers({
    gameFormats: gameFormatsReducer,
    colors: colorsReducer,
    cardTypes: cardTypesReducer,
    rarities: raritiesReducer
})

export default cardSearchApp
