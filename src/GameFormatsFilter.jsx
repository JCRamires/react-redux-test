import React, {Component} from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'

import {addGameFormat, removeGameFormat} from './actions'

export class GameFormatsFilter extends Component {
    constructor(props) {
        super(props)

        this.handleCheckboxChange = (event) => {this.dispatchGameFormat(event)}
    }

    dispatchGameFormat(event) {
        //TODO não usar jquery
        const $checkbox = $(event.target)
        let dispatchData = {key:$checkbox.attr('name'), value: false}
        if ($checkbox.is(':checked')) {
            dispatchData.value = true
        } else {
            dispatchData.value = false
        }

        this.props.onChangeCheckbox(dispatchData)
    }

    render() {
        return (
            <div>
                GAME FORMATS
                <br /><br />
                <div className="ui checkbox">
                    <input type="checkbox" name='standard' checked={this.props.standard}
                           onChange={this.handleCheckboxChange}/>
                    <label>Standard</label>
                </div>
                <br />
                <div className="ui checkbox">
                    <input type="checkbox" name='modern' checked={this.props.modern}
                           onChange={this.handleCheckboxChange}/>
                    <label>Modern</label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.gameFormats
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCheckbox: (gameFormat) => {
            if (gameFormat.value){
                dispatch(addGameFormat(gameFormat.key))
            } else {
                dispatch(removeGameFormat(gameFormat.key))
            }
        }
    }
}

export const GameFormatsFilterContainer = connect(mapStateToProps, mapDispatchToProps)(GameFormatsFilter)
