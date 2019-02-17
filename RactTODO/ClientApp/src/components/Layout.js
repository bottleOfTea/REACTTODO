import React from 'react';
import NavMenu from './NavMenu';

export default props => (
    <React.Fragment>
        <NavMenu />
        <div className="container">
            {props.children}
        </div>
    </React.Fragment>
);
