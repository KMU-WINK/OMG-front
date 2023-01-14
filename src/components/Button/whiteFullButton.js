import React from 'react';
import * as style from './styles';
function WhiteFullButton(props) {

    return (
        <style.whiteFullButton style={props.style} onClick={props.onClick}>
            <span>{props.btnName}</span>
        </style.whiteFullButton>
    );
}

export default WhiteFullButton;
