import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import GAME_DATA from '../games/game.data.js';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: GAME_DATA
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.slice(0).reverse().filter((item, idx) => idx < 4).map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
