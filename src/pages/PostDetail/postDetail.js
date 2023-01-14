import React, { useState, useRef, useEffect } from "react";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Modal4 from "../../components/Modal/modal4";
import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router";
import { boardService } from "../../apis/services/board";

function PostDetail(props) {
    const { state } = useLocation();
    const navigate = useNavigate();
    const data = {
        type: "EDIT",
        id: state.id,
        title: state.title,
        contents: state.contents,
    }
    
    const [showReaction, setShowReaction] = useState(false);
    const [showMenuPopup, setMenuPopup] = useState(false);
    const [modifyPost, setModifyPost] = useState(false);
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
    // 삭제 모달창 닫을 때 
    const closeDeleteModal = () => {
        setDeletePost(false);
    }
    // 삭제 모달창에서 확인 버튼 눌렀을 때
    const DeletePost = () => {
        setDeletePost(false);
        boardService.deleteBoard(state.id);
        // 글 삭제 후 게시판으로 이동 
        navigate("/board");
    }

    // 수정 모달창 열릴 때 
    const openModifyModal = () => {
        setMenuPopup(false);
        setModifyPost(true);
    }
    
    // 수정 모달창 닫을 때 
    const closeModifyModal = () => {
        setModifyPost(false);
    }

    // 수정 버튼 눌렀을 때 
    const ModifyPost = () => {
        setModifyPost(false);
        navigate("/write-post", {state: data});
    }



    const clickPost = () => {
        alert("댓글 전송");
    }

    const dimmed = useRef();
    const contents = useRef();

    const handleCloseMenu = (e) => {
        if (dimmed.current?.contains(e.target) && !contents.current?.contains(e.target)
        ) { setMenuPopup(false);}
    };

    useEffect(() => {
        document.addEventListener("click", handleCloseMenu);
        return () => document.removeEventListener("click", handleCloseMenu);
    }, []);

    const Menu = () => {
        return (
            <style.menuModalBack ref={dimmed}>
                <style.menuModal ref={contents}>
                    <span style={{color: "#7A7171", cursor: "pointer"}}>글 메뉴</span>
                    <style.underLine/>
                    <span style={{color: "#009800", fontWeight: "bold", marginTop: "18px", cursor: "pointer"}} onClick={openDeleteModal}>삭제</span>
                    <style.underLine/>
                    <span style={{color: "#009800", fontWeight: "bold", marginTop: "18px", cursor: "pointer"}} onClick={openModifyModal}>수정</span>
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
                    <span> 수거 <span style={{color: "#009800", fontWeight: "700"}}> {state.bottleBuy}회 </span> | 
                    등록 <span style={{color: "#009800", fontWeight: "700"}}> {state.bottleSell}회 </span> | 
                    공병지수 <span style={{color: "#009800", fontWeight: "700"}}> {state.point}ml </span> </span>
                </style.userInfoBox>
                <span style={{color: "#7A7171", marginLeft: "25px"}}>2시간 전</span>
            </style.infoContainer>
            <style.title >{state.title}</style.title>
            <style.content>{state.contents} </style.content>

            <style.reactionBox>
                <style.reactionImg src={process.env.PUBLIC_URL + '/images/Board/Happy.svg'}/>
                <span style={{color: "#009800", fontSize: "14px", alignSelf: "center", cursor: "pointer"}} onClick={openReationModal}> 공감하기 </span>
                {showReaction ? 
                <Modal4 open={openReationModal} close={closeReactionModal} header=""
            button1={closeReactionModal} button1Content="확인">
                <span style={{fontSize: "18px", fontWeight: "bold", alignSelf: "center"}}>{"이 글을 공감하시겠습니까?"}</span>
                </Modal4> : null}

                <style.reactionImg src={process.env.PUBLIC_URL + '/images/Board/Message.svg'}/>
                <span style={{fontSize: "14px", alignSelf: "center", marginRight: "30px"}}> {state.comments} </span>
            </style.reactionBox>

            <style.underLine />

            <style.SearchContainer>
                <input type={"text"} placeholder={"댓글을 입력해주세요"}/>
                <img src={process.env.PUBLIC_URL + '/images/Board/SendComment.svg'} onClick={clickPost}/>
            </style.SearchContainer>

            {showMenuPopup ? <Menu/> : null}
            {deletePost ? 
                <Modal4 open={openDeleteModal} close={closeDeleteModal} header=""
            button1={DeletePost} button1Content="확인">
                <span style={{fontSize: "18px", fontWeight: "bold", alignSelf: "center"}}>{"이 글을 삭제하시겠습니까?"}</span>
                </Modal4> : null}

            {modifyPost ? 
                <Modal4 open={openModifyModal} close={closeModifyModal} header=""
            button1={ModifyPost} button1Content="확인">
                <span style={{fontSize: "18px", fontWeight: "bold", alignSelf: "center"}}>{"이 글을 수정하시겠습니까?"}</span>
                </Modal4> : null}
            <Footer />
        </style.Wrap>
    )
}

export default PostDetail;