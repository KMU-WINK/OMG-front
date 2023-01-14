import react, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { Col } from "./styles";
import { boardService } from "../../apis/services/board";

function WritePost(props) {
  const { state } = useLocation();

  const [userInput, setUserInputs] = useState({
    title: state.title ? state.title : "",
    content: state.contents ? state.contents : "",
  });
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const UploadPost = () => {
    if (!userInput["title"]) alert("글 제목을 입력하세요");
    if (!userInput["content"]) alert("글 내용을 입력하세요");
    if (state.type === "EDIT") {
      boardService.updateBoard(state.id, userInput);
      navigate("/board");
    } else if (state.type === "UPLOAD") {
      boardService.createBoard(userInput);
      navigate("/board");
    }
  };

  const changeValue = (name) => (e) => {
    switch (name) {
      case "title":
        setUserInputs((prevState) => {
          return { ...prevState, title: e.target.value };
        });
        break;
      case "content":
        setUserInputs((prevState) => {
          return { ...prevState, content: e.target.value };
        });
        break;
      default:
        break;
    }
  };

  return (
    <style.Wrap>
      <Header title={"글 작성하기"} onClick={UploadPost} />
      <Col>
        <style.titleInput
          type={"text"}
          value={userInput.title}
          placeholder={"제목"}
          onChange={changeValue("title")}
        />
        {showPopup ? (
          <style.cardBox>
            <style.noticeCard>
              <style.line>
                <span style={{ fontWeight: "700" }}>
                  {" "}
                  {`이런 글은 작성하실 수 없어요. \n`}{" "}
                </span>
                <button onClick={() => setShowPopup(false)}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/Common/close.svg"}
                  />
                </button>
              </style.line>
              <span style={{ fontWeight: "500" }}>
                {`· 타인의 권리를 침해하거나 불쾌감을 주는 글 
                            · 범죄, 불법 행위 등 법령을 위반하는 글 
                            · 광고/홍보 목적의 글 
                            · 정치/사회에 대한 의견 및 가치관을 드러내는 글`}
              </span>
            </style.noticeCard>
          </style.cardBox>
        ) : null}
        <style.contentInput
          type={"text"}
          value={userInput.content}
          placeholder={"글 내용을 입력하세요."}
          onChange={changeValue("content")}
        />
      </Col>
      <Footer />
    </style.Wrap>
  );
}

export default WritePost;
