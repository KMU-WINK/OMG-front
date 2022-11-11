import React from 'react';
import * as style from './styles';

function Input(props) {

    return (
        <style.Wrap>
            <span>{props.title}</span>
            <input type={'text'} placeholder={props.title + '을 입력해주세요'} />
        </style.Wrap>
    );
}

export default Input;
