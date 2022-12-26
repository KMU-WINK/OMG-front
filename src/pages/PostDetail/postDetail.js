import React from "react";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { click } from "@testing-library/user-event/dist/click";

function PostDetail(props) {
    const clickMenu = () => {
        alert("메뉴 클릭")
    }

    const clickReaction = () => {
        alert("공감 클릭")
    }

    return (
        <style.Wrap>
            <Header title={"게시글"} onClick={clickMenu}/>
            <style.infoContainer>
                <style.profileImg src={process.env.PUBLIC_URL + '/images/Common/Profile.svg'}/>
                <style.userInfoBox>
                    <span> {"이다은"} </span>
                    <span> 수거 <span style={{color: "#009800"}}> 3회 </span> | 
                    등록 <span style={{color: "#009800"}}> 2회 </span> | 
                    공병지수 <span style={{color: "#009800"}}> 100ml </span> </span>
                </style.userInfoBox>
                <span style={{color: "#7A7171", marginLeft: "25px"}}>2시간 전</span>
            </style.infoContainer>
            <style.title >공병 회수에 대해 알아보자!</style.title>
            <style.content>하나, 공병을 가지고 있으면 인근 매장에 가서 보증금을 받으세요 둘, 공병을 가지고 있으면 인근 매장에 가서 보증금을 받으세요. </style.content>
            <style.reactionBox>
                <style.reactionImg src={process.env.PUBLIC_URL + '/images/Board/Happy.svg'}/>
                <span style={{color: "#009800", fontSize: "14px", alignSelf: "center", cursor: "pointer"}} onClick={clickReaction}> 공감하기 </span>
                <style.reactionImg src={process.env.PUBLIC_URL + '/images/Board/Message.svg'}/>
                <span style={{fontSize: "14px", alignSelf: "center", marginRight: "30px"}}> 5 </span>
            </style.reactionBox>
            <style.SearchContainer>
                <input type={"text"} placeholder={"댓글을 입력해주세요"}/>
                <img src={process.env.PUBLIC_URL + '/images/Board/SendComment.svg'}/>
            </style.SearchContainer>
            <Footer />
        </style.Wrap>
    )
}

export default PostDetail;