import React, { useState } from "react";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Modal4 from "../../components/Modal/modal4";
import { useLocation } from "react-router-dom";

function PostDetail(props) {
    const { state } = useLocation();
    const [showMenuPopup, setMenuPopup] = useState(false);
    const [showReaction, setShowReaction] = useState(false);
    const [deletePost, setDeletePost] = useState(false);

    const clickMenu = () => {
        setMenuPopup(true);
    }

    const openReationModal = () => {
        setShowReaction(true);
    }
    const closeReactionModal = () => {
        setShowReaction(false);
    }

    // 삭제 모달창 열릴 때 
    const openDeleteModal = () => {
        setMenuPopup(false);
        setDeletePost(true);
    }
    
    // 삭제 모달창에서 확인 버튼 눌렀을 때
    const closeDeleteModal = () => {
        setDeletePost(false);
    }


    const clickPost = () => {
        alert("댓글 전송");
    }

    const Menu = () => {
        return (
            <style.menuModalBack>
                <style.menuModal>
                    <span style={{fontSize: "18px", color: "#7A7171", cursor: "pointer"}}>글 메뉴</span>
                    <style.underLine/>
                    <span style={{fontSize: "22px", color: "#009800", fontWeight: "bold", marginTop: "18px", cursor: "pointer"}} onClick={openDeleteModal}>삭제</span>
                    <style.underLine/>
                    <span style={{fontSize: "22px", color: "#009800", fontWeight: "bold", marginTop: "18px", cursor: "pointer"}}>수정</span>
                </style.menuModal>
            </style.menuModalBack>
        )
    }

    return (
        <style.Wrap>
            <Header title={"게시글"} onClick={clickMenu}/>
            <style.infoContainer>
                <style.profileImg src={process.env.PUBLIC_URL + '/images/Common/Profile.svg'}/>
                <style.userInfoBox>
                    <span> {state.name} </span>
                    <span> 수거 <span style={{color: "#009800", fontWeight: "700"}}> {state.getCnt}회 </span> | 
                    등록 <span style={{color: "#009800", fontWeight: "700"}}> {state.setCnt}회 </span> | 
                    공병지수 <span style={{color: "#009800", fontWeight: "700"}}> {state.point}ml </span> </span>
                </style.userInfoBox>
                <span style={{color: "#7A7171", marginLeft: "25px"}}>2시간 전</span>
            </style.infoContainer>
            <style.title >공병 회수에 대해 알아보자!</style.title>
            <style.content>하나, 공병을 가지고 있으면 인근 매장에 가서 보증금을 받으세요 둘, 공병을 가지고 있으면 인근 매장에 가서 보증금을 받으세요. </style.content>
            <style.reactionBox>
                <style.reactionImg src={process.env.PUBLIC_URL + '/images/Board/Happy.svg'}/>
                <span style={{color: "#009800", fontSize: "14px", alignSelf: "center", cursor: "pointer"}} onClick={openReationModal}> 공감하기 </span>
                
                {showReaction ? 
                <Modal4 open={openReationModal} close={closeReactionModal} header=""
            button1={closeReactionModal} button1Content="확인">
                <span style={{fontSize: "18px", fontWeight: "bold", alignSelf: "center"}}>{"이 글을 공감하시겠습니까?"}</span>
                </Modal4> : null}

                <style.reactionImg src={process.env.PUBLIC_URL + '/images/Board/Message.svg'}/>
                <span style={{fontSize: "14px", alignSelf: "center", marginRight: "30px"}}> 5 </span>
            </style.reactionBox>
            <style.SearchContainer>
                <input type={"text"} placeholder={"댓글을 입력해주세요"}/>
                <img src={process.env.PUBLIC_URL + '/images/Board/SendComment.svg'} onClick={clickPost}/>
            </style.SearchContainer>

            {showMenuPopup ? <Menu /> : null}
            {deletePost ? 
                <Modal4 open={openDeleteModal} close={closeDeleteModal} header=""
            button1={closeDeleteModal} button1Content="확인">
                <span style={{fontSize: "18px", fontWeight: "bold", alignSelf: "center"}}>{"이 글을 삭제하시겠습니까?"}</span>
                </Modal4> : null}

            <Footer />
        </style.Wrap>
    )
}

export default PostDetail;