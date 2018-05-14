import React, { Component } from 'react';

import ItemModal from '../ItemModal/ItemModal.js';
import './ArmoryItem.css';

class ArmoryItem extends Component {
    constructor() {
        super();

        this.state = {
            modalShown: false
        }
        this.displayItemModal = this.displayItemModal.bind(this);
        this.removeItemModal = this.removeItemModal.bind(this);
    }

    displayItemModal() {
        this.setState({ modalShown: true });
    }

    removeItemModal() {
        this.setState({ modalShown: false });
    }

    render() {
        const { name, icon, itemLevel, quality } = this.props.item;

        return (
            <div className="item-container" onMouseEnter={() => this.displayItemModal()} onMouseLeave={() => this.removeItemModal()}>
                <img className={`item-border-${quality}`} src={`https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`} alt={`${name}-icon`} />
                
                <div className="item-text item-text--right">
                    <h4 className={`item-quality-${quality}`}>{name}</h4>
                    <p className={`item-quality-${quality}`}>({itemLevel})</p>
                </div>

                {
                    this.state.modalShown ? <ItemModal item={this.props.item} /> : null
                }
            </div>
        )
    }
}

export default ArmoryItem;