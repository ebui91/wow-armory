import React, { Component } from 'react';
import './CharacterStats.css';

class CharacterStats extends Component {
    render() {
        return(
            <section className="stats-container">
                <h2>STATS</h2>
                
                <p>HEALTH</p>
                <div className="armory-bar armory-healthbar">
                    <p>{this.props.stats && this.props.stats.health}</p>
                </div>

                <div className={ `armory-${this.props.stats && this.props.stats.powerType}bar` }>
                    <p>{this.props.stats && this.props.stats.power}</p>
                </div>
            </section>
        )
    }
}

export default CharacterStats;