import React from 'react';
import * as style from './styles';

function Header(props) {

    return (
        <style.Wrap>
            <style.Title>
                <img src={process.env.PUBLIC_URL + '/images/Header/backIcon.svg'}/>
                <span>{props.title}</span>
            </style.Title>
        </style.Wrap>
    );
}

export default Header;
