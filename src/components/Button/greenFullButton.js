import React from 'react';
import * as style from './styles';
function GreenFullButton(props) {

    return (
        <style.greenFullButton onClick={props.onClick}>
            <span>{props.btnName}</span>
        </style.greenFullButton>
    );
}

export default GreenFullButton;
