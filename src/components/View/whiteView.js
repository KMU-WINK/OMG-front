import React from 'react';
import * as style from './styles';
function WhiteView(props) {

    return (
        <style.whiteView style={props.style} onClick={props.onClick}>
            <span>{props.btnName}</span>
        </style.whiteView>
    );
}

export default WhiteView;
