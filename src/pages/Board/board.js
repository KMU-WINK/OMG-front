import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import { boardService } from "../../apis/services/board";
import {
  Wrap,
  Contents,
  WriteImg,
  BoardContent,
  Search,
  MainTitle,
} from "./styles";

function Board() {
  const navigator = useNavigate();
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setBoardList(await boardService.getBoardList());
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <Wrap>
      <Header title={"게시판"} />
      <Contents>
        <div>
          <Search type={"text"} placeholder={"단어를 검색해보세요"} />
        </div>
        <div>
          <MainTitle>내 주변 소식</MainTitle>
          <BoardContent>
            {boardList.map((board) => (
              <Card
                id={board["id"]}
                name={board["user"]["name"]}
                bottleSell={board["user"]["bottleSell"]}
                bottleBuy={board["user"]["bottleBuy"]}
                point={board["user"]["point"]}
                title={board["title"]}
                contents={board["content"]}
                likes={board["likes"].length}
                comments={board["comments"].length}
                userId={board["user"]["id"]}
              />
            ))}
          </BoardContent>
        </div>
      </Contents>
      <WriteImg
        src={process.env.PUBLIC_URL + "/images/Board/Write.svg"}
        onClick={() =>
          navigator("/write-post", {
            state: { title: "", contents: "", type: "UPLOAD" },
          })
        }
      />
      <Footer />
    </Wrap>
  );
}

export default Board;
