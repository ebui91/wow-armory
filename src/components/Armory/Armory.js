import React, { Component } from 'react';
import axios from 'axios';

import ArmoryItem from '../ArmoryItem/ArmoryItem.js';
import statsList from '../../stats.json';

import './Armory.css';

class Armory extends Component {
    constructor() {
        super();

        this.state = {
            itemList: [],
            statsList: {}
        }
    }

    componentDidMount() {
        axios.get('/api/armory').then(response => {
            for (var key in response.data) { 
                if (key !== "averageItemLevel" || key !== "averageItemLevelEquipped") {
                    this.setState({ itemList: [...this.state.itemList, response.data[key] ] }); 
                }
            }
        });
        this.setState({ statsList: statsList });
    }

    render() {
        const items = this.state.itemList.slice(2, 19).map((curr, i) => {
            return(
                <ArmoryItem key={i} item={ curr } stats={ this.state.statsList } />
            )
        }); 
        return(
            <section className="armory-container" style={{ backgroundImage: `url(${this.props.imgURL && this.props.imgURL.replace(/avatar.jpg/i, 'main.jpg')})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                { items }
            </section>
        )
    }
}

export default Armory;