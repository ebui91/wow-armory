import React, { Component } from 'react';
import axios from 'axios';

import ArmoryItem from '../ArmoryItem/ArmoryItem.js';

class Armory extends Component {
    constructor() {
        super();

        this.state = {
            itemList: []
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
    }

    render() {
        const items = this.state.itemList.slice(2, 18).map((curr, i) => {
            return(
                <ArmoryItem item={ curr } />
            )
        });
        return(
            <React.Fragment>
                <h1>ARMORY</h1>
                { items }
            </React.Fragment>
        )
    }
}

export default Armory;