import React, { Component } from 'react'

import '../semantic/dist/semantic.css'
import '../semantic/dist/semantic.js'

import Filtros from './Filtros.jsx'
import CardsList from './CardsList.jsx'

export default class App extends Component {
  render() {
    return (
      <div className='ui container'>
        <Filtros />
        <CardsList />
      </div>
    )
  }
}
