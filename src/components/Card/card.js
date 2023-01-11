import React, { useState } from 'react';
import * as style from './styles';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const navigator = useNavigate();
    const info = {
        name: props.name,
        getCnt: props.getCnt,
        setCnt: props.setCnt,
        point: props.point 
    }

    const handleClick = () => {
        navigator('/post-detail', {state: info});
    }
    
    return (
        <style.Wrap onClick={handleClick}>
            <style.infoContainer>
                <div>
                <style.profileImg src={process.env.PUBLIC_URL + '/images/Common/Profile.svg'}/>
                    <style.userInfoBox>
                        <span> {props.name} </span>
                        <span> 수거 <span style={{color: "#009800"}}> {props.getCnt}회 </span> |
                        등록 <span style={{color: "#009800"}}> {props.setCnt}회 </span> |
                        공병지수 <span style={{color: "#009800"}}> {props.point}ml </span> </span>
                    </style.userInfoBox>
                </div>
                <span style={{color: "#7A7171"}}>2시간 전</span>
            </style.infoContainer>
            <style.contentBox>
                <style.title >공병 회수에 대해 알아보자!</style.title>
                <style.content>하나, 공병을 가지고 있으면 인근 매장에 가서 보증금을 받으세요 둘, 공병을 가지고 있으면 인근 매장에 가서 보증금을 받으세요</style.content>
            </style.contentBox>
            <style.reactionBox>
                <style.reactionImg src={process.env.PUBLIC_URL + '/images/Board/Happy.svg'}/>
                <span style={{color: "#009800"}}> 3 </span>
                <style.reactionImg src={process.env.PUBLIC_URL + '/images/Board/Message.svg'}/>
                <span> 5 </span>
            </style.reactionBox>
        </style.Wrap>
    )
    
}

export default Card;