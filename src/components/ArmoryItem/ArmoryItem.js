import React, { Component } from 'react';
import axios from 'axios';
import './ArmoryItem.css';

class ArmoryItem extends Component {
    constructor() {
        super();

        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        this.setState({ item: this.props.item });
        axios.get("/api/item")
    }

    render() {
        const { name, icon, quality } = this.state.item;
        return (
            <div className="item-container">
                <h4 className={`item-quality-${quality}`}>{name}</h4>
                <img src={`http://media.blizzard.com/wow/icons/56/${icon}.jpg`} alt={`${name}-icon`} />
            </div>
        )
    }
}

export default ArmoryItem;