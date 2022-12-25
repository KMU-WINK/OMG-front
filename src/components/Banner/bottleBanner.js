import React from 'react';
import * as style from './styles';
function BottleBanner(props) {

    return (
        <style.bottleBanner>
            <span>{props.btnName}</span>
        </style.bottleBanner>
    );
}

export default BottleBanner;
