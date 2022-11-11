import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as style from './styles';

function Header(props) {

    const navigator = useNavigate();

    return (
        <style.Wrap>
            <style.Title>
                <img src={process.env.PUBLIC_URL + '/images/Header/backIcon.svg'}/>
                <span>{props.title}</span>
                {
                    props.title == '마이페이지' ?
                        <img src={process.env.PUBLIC_URL + '/images/Header/settingIcon.svg'} onClick={()=> navigator('/setting')}/>
                        : null
                }
            </style.Title>
        </style.Wrap>
    );
}

export default Header;
