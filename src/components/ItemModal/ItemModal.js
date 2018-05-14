import React, { Component } from 'react';
import axios from 'axios';
import statsList from '../../stats.json';
import bonusList from '../../item-bonus.json';
import './ItemModal.css';


// this.state.item.itemSpells && this.state.item.itemSpells.length > 0 ? <p className="item-stat-text">Equip: {this.state.item.itemSpells[2].spell.description}</p> : null

class ItemModal extends Component {
    constructor() {
        super();

        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        axios.get(`/api/item/${this.props.item.id}`)
            .then(response => {console.log(response.data); this.setState({ item: response.data })});
    }

    render() {
        const { armor, name, itemLevel, quality, stats } = this.props.item;
        const statDisplay = stats.map((stat, i) => {
            var statName = statsList[stat.stat];
            return (
                <React.Fragment>
                    <p key={i} className="item-stat-text">+{stat.amount} {statName}</p>
                </React.Fragment>
            )
        });

        return (
            <div className="item-modal-container">
                <h3 className={`item-quality-${quality}`}>{name}</h3>
                <p className="item-level-text">Item Level {itemLevel}</p>
                <p className="item-stat-text">{this.state.item.nameDescription}</p>
                
                {
                    armor > 0 ? <p>{armor} Armor</p> : null
                }
                
                {
                    this.props.item.weaponInfo ? (
                        <React.Fragment>
                            <p>{this.props.item.weaponInfo.damage.exactMin} - {this.props.item.weaponInfo.damage.exactMax} Damage</p>
                            <p>Speed {this.props.item.weaponInfo.weaponSpeed.toFixed(2)}</p>
                            <p>({Math.floor(this.props.item.weaponInfo.dps)} damage per second)</p>
                        </React.Fragment>
                    ) : null
                }

                {statDisplay}

                {
                }
                
                {
                    this.state.item.description? <p className="item-level-text">"{this.state.item.description}"</p> : null

                }
            </div>
        )
    }
}

export default ItemModal;