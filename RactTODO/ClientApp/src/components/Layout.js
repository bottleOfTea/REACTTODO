import React from 'react';
import NavMenu from './NavMenu';
import ErrorContainer from '../containers/ErrorContainer'

const Layout = props => (
    <React.Fragment>
        <NavMenu />
        <ErrorContainer>
            {props.children}
        </ErrorContainer>
    </React.Fragment>
);

export default Layout;