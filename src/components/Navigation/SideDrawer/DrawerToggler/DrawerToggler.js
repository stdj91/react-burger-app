import React from 'react';
import { checkPropTypes } from 'prop-types';

const drawerToggler = (props) => (
    <div onClick={props.clicked}>Menu</div>
);

export default drawerToggler;