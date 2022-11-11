import React from 'react';
import * as style from './styles';
function FullButton(props) {

    return (
        <style.fullButton>
            <span>{props.btnName}</span>
        </style.fullButton>
    );
}

export default FullButton;
