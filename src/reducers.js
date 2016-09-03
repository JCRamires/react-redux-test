import { combineReducers } from 'redux'
import { ADD_GAME_FORMAT } from './actions'

function gameFormatsReducer(state =
  {
    standard: true,
    modern: false,
    legacy: false,
    commander: false
  }, action){
    return state
  }
function colorsReducer(state = {colors:[]}, action){
  return state
}
function cardTypesReducer(state = {cardTypes:[]}, action){
  return state
}
function raritiesReducer(state = {rarities:[]}, action){
  return state
}

function cardsFilter(state, action){
  switch(action.type){
    case ADD_GAME_FORMAT:
      return [
        ...state.gameFormat,
        action.text
      ]
    default:
      return state
  }
}

const cardSearchApp = combineReducers({
  gameFormats: gameFormatsReducer,
  colors: colorsReducer,
  cardTypes: cardTypesReducer,
  rarities: raritiesReducer
})

export default cardSearchApp
