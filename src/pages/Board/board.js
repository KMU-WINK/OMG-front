import React, {useEffect, useState} from 'react';
import * as style from './styles';
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import { boardService } from '../../apis/services/board';


function Board(props) {
    const navigator = useNavigate();
    const [boardList, setBoardList] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
                setBoardList(await boardService.getBoardList());
            } catch (e) {
                console.log(e)
            }
        })();
    }, []);
    

    return (
        <style.Wrap>
            <style.btnWrite onClick={()=> navigator('/write-post')}>
                <style.writeImg src={process.env.PUBLIC_URL + '/images/Board/Write.svg'}/>
            </style.btnWrite>
            <Header title={"게시판"} />
                <style.SearchContainer>
                    <style.Search type={"text"} placeholder={"단어를 검색해보세요"}/>
                </style.SearchContainer>
                <style.mainTitle>내 주변 소식</style.mainTitle>
                <style.boardContent>
                {boardList.map((board) => (
                    <Card name={board['user']['name']} getCnt={3} setCnt={2} point={board['user']['point']} 
                        title={board['title']} contents={board['content']} likes={board['likes'].length} comments={board['comments'].length}>
                        </Card>
                ))}
                </style.boardContent>
            <Footer />
        </style.Wrap>
    );
}


export default Board;

