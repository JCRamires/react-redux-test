import React, {Component} from 'react'
import axios from 'axios'

import Card from './Card.jsx'

export default class CardsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            sets: [],
            page: 1
        }
    }

    componentDidMount() {
        $('#cardGrid').visibility({
            onBottomVisible: () => {
                this.fetchCards()
            }
        })

        axios.get('https://api.magicthegathering.io/v1/sets').then(response => {
            this.setState({sets: response.sets})
        })
    }

    fetchCards() {
        axios.get('https://api.magicthegathering.io/v1/cards', {
            params: {
                type: 'artifact,creature,enchantment,instant,planeswalker,sorcery',
                gameFormat: 'standard',
                legalities: 'legal',
                page: this.state.page
            }
        }).then(response => {
            this.setState({cards: response.data.cards})
        }).catch((error) => {
            // TODO catch error
        })

        this.setState({page: this.state.page + 1})
    }

    getCards() {
        return this.state.cards.map(card => {
            return (
                <div key={card.id} className='column'>
                    <Card name={card.name} imageURL={card.imageUrl} set={card.set}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='ui grid'>
                <div id='cardGrid' className='doubling stackable six column row'>
                    {this.getCards()}
                </div>
            </div>
        )
    }
}
