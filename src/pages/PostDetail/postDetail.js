import React, { useState, useRef, useEffect } from "react";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Modal4 from "../../components/Modal/modal4";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { boardService } from "../../apis/services/board";
import { meService } from "../../apis/services/me";
import { Flex } from "./styles";

function PostDetail(props) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const data = {
    type: "EDIT",
    id: state.id,
    userId: state.userId,
    title: state.title,
    contents: state.contents,
  };

  const [showReaction, setShowReaction] = useState(false);
  const [showMenuPopup, setMenuPopup] = useState(false);
  const [modifyPost, setModifyPost] = useState(false);
  const [deletePost, setDeletePost] = useState(false);

  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const getInfo = await meService.getInfo();
        setCurrentUser(getInfo["user"]["user"]["id"]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const clickMenu = () => {
    setMenuPopup(true);
  };

  const openReationModal = () => {
    setShowReaction(true);
  };
  const closeReactionModal = () => {
    setShowReaction(false);
  };

  // 삭제 모달창 열릴 때
  const openDeleteModal = () => {
    setMenuPopup(false);
    setDeletePost(true);
  };
  // 삭제 모달창 닫을 때
  const closeDeleteModal = () => {
    setDeletePost(false);
  };
  // 삭제 모달창에서 확인 버튼 눌렀을 때
  const DeletePost = () => {
    setDeletePost(false);
    boardService.deleteBoard(state.id);
    // 글 삭제 후 게시판으로 이동
    navigate("/board");
  };

  // 수정 모달창 열릴 때
  const openModifyModal = () => {
    setMenuPopup(false);
    setModifyPost(true);
  };

  // 수정 모달창 닫을 때
  const closeModifyModal = () => {
    setModifyPost(false);
  };

  // 수정 버튼 눌렀을 때
  const ModifyPost = () => {
    setModifyPost(false);
    navigate("/write-post", { state: data });
  };

  const clickPost = () => {
    alert("댓글 전송");
  };

  const dimmed = useRef();
  const contents = useRef();

  const handleCloseMenu = (e) => {
    if (
      dimmed.current?.contains(e.target) &&
      !contents.current?.contains(e.target)
    ) {
      setMenuPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseMenu);
    return () => document.removeEventListener("click", handleCloseMenu);
  }, []);

  const UserMenu = () => {
    return (
      <style.MenuModalBack ref={dimmed}>
        <style.MenuModal ref={contents}>
          <span style={{ color: "#7A7171", cursor: "pointer" }}>글 메뉴</span>
          <style.UnderLine />
          <span
            style={{
              color: "#009800",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={openDeleteModal}
          >
            삭제
          </span>
          <style.UnderLine />
          <span
            style={{
              color: "#009800",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={openModifyModal}
          >
            수정
          </span>
        </style.MenuModal>
      </style.MenuModalBack>
    );
  };

  const NotUserMenu = () => {
    return (
      <style.MenuModalBack ref={dimmed}>
        <style.MenuModal ref={contents}>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              alert("신고 기능은 아직 구현 중입니다.");
              setMenuPopup(false);
            }}
          >
            신고하기
          </span>
        </style.MenuModal>
      </style.MenuModalBack>
    );
  };

  return (
    <style.Wrap>
      <Header title={"게시글"} onClick={clickMenu} />
      <div>
        <Flex wrap={true}>
          <Flex gap={"12px"}>
            <style.ProfileImg
              src={process.env.PUBLIC_URL + "/images/Common/Profile.svg"}
            />
            <style.UserInfoBox>
              <span> {state.name} </span>
              <span>
                수거 <span> {state.bottleBuy}회 </span> | 등록
                <span> {state.bottleSell}회 </span> | 공병지수
                <span> {state.point}ml </span>
              </span>
            </style.UserInfoBox>
          </Flex>
          <span>2시간 전</span>
        </Flex>
        <style.Title>{state.title}</style.Title>
        <style.Content>{state.contents} </style.Content>
        <style.ReactionBox>
          <Flex gap={"8px"}>
            <style.ReactionImg
              src={process.env.PUBLIC_URL + "/images/Board/Happy.svg"}
            />
            <span onClick={openReationModal}>공감하기</span>
          </Flex>
          {showReaction ? (
            <Modal4
              open={openReationModal}
              close={closeReactionModal}
              header=""
              button1={closeReactionModal}
              button1Content="확인"
            >
              <span>{"이 글을 공감하시겠습니까?"}</span>
            </Modal4>
          ) : null}
          <Flex gap={"8px"}>
            <style.ReactionImg
              src={process.env.PUBLIC_URL + "/images/Board/Message.svg"}
            />
            <span>{state.comments}</span>
          </Flex>
        </style.ReactionBox>
      </div>
      <style.UnderLine />
      <style.SearchContainer>
        <input type={"text"} placeholder={"댓글을 입력해주세요"} />
        <img
          src={process.env.PUBLIC_URL + "/images/Board/SendComment.svg"}
          onClick={clickPost}
        />
      </style.SearchContainer>
      {showMenuPopup && currentUser === data.userId ? (
        <UserMenu />
      ) : showMenuPopup && currentUser !== data.userId ? (
        <NotUserMenu />
      ) : null}
      {deletePost ? (
        <Modal4
          open={openDeleteModal}
          close={closeDeleteModal}
          header=""
          button1={DeletePost}
          button1Content="확인"
        >
          <span>{"이 글을 삭제하시겠습니까?"}</span>
        </Modal4>
      ) : null}
      {modifyPost ? (
        <Modal4
          open={openModifyModal}
          close={closeModifyModal}
          header=""
          button1={ModifyPost}
          button1Content="확인"
        >
          <span>{"이 글을 수정하시겠습니까?"}</span>
        </Modal4>
      ) : null}
      <Footer />
    </style.Wrap>
  );
}

export default PostDetail;
