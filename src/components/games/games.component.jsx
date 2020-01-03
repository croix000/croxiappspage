import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import GAME_DATA from './game.data.js';
import './games.styles.scss';

class Games extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: GAME_DATA
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.slice(0).reverse().map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Games;
