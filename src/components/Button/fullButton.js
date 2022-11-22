import React from 'react';
import * as style from './styles';
function FullButton(props) {

    return (
        <style.fullButton>
            <span onClick={props.onClick}>{props.btnName}</span>
        </style.fullButton>
    );
}

export default FullButton;
