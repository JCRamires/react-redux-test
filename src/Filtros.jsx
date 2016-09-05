import React, {Component} from 'react'
import {connect} from 'react-redux'

import {GameFormatsFilterContainer} from './GameFormatsFilter.jsx'

export default class Filtros extends Component {
    render() {
        return (
            <div className='ui grid'>
                <div className='stackable four column row'>
                    <div className='column'>
                        <GameFormatsFilterContainer />
                    </div>
                    <div className='column'>
                        Colors
                    </div>
                    <div className='column'>
                        Types
                    </div>
                    <div className='column'>
                        Rarity
                    </div>
                </div>
            </div>
        )
    }
}
