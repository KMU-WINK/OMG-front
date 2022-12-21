import React from 'react';
import * as style from './styles';
function Banner(props) {

    return (
        <style.banner>
            <span onClick={props.onClick}>{props.btnName}</span>
        </style.banner>
    );
}

export default Banner;
