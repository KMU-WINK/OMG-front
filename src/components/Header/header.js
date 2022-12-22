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
                        : props.title == "글 작성하기" ?
                            <button> 확인 </button>
                        : null
                }
            </style.Title>
        </style.Wrap>
    );
}

export default Header;
