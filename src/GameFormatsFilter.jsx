import React, {Component} from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'

import {addGameFormat} from './actions'

export class GameFormatsFilter extends Component {
    handleCheckboxChange(event) {
        let $checkbox = $(event.target)
        if ($checkbox.is(':checked')) {
            console.log('check')
        } else {
            console.log('uncheck')
        }
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
            if (gameFormat.value) {
                dispatch(addGameFormat(gameFormat))
            } else {
                dispatch()
            }
        }
    }
}

export const GameFormatsFilterContainer = connect(mapStateToProps)(GameFormatsFilter)
