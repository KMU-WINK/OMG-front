import react, {useState} from "react";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import {Col} from "./styles";

function WritePost(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [showPopup, setShowPopup] = useState(true);

    const UploadPost = () => {
        if (!title) alert("글 제목을 입력하세요")
        if (!content) alert("글 내용을 입력하세요")
    }

    const changeValue = (name) => (e) => {
        switch(name) {
            case "title": setTitle(e.target.value); break;
            case "content": setContent(e.target.value); break;
            default: break;
        }
    }

    return (
        <style.Wrap>
            <Header title={"글 작성하기"} onClick={UploadPost}/>
            <Col>
            <style.titleInput type={"text"} placeholder={"제목"} onChange={changeValue("title")}/>
            {showPopup ? 
                <style.cardBox>
                    <style.noticeCard>
                        <style.line>
                            <span style={{fontWeight: "700"}}> {`이런 글은 작성하실 수 없어요. \n`} </span>
                            <button onClick={() => setShowPopup(false)}>
                                <img src={process.env.PUBLIC_URL + '/images/Common/close.svg'} />
                            </button>
                        </style.line>
                        <span style={{fontWeight: "500"}}>
                            {`· 타인의 권리를 침해하거나 불쾌감을 주는 글 
                            · 범죄, 불법 행위 등 법령을 위반하는 글 
                            · 광고/홍보 목적의 글 
                            · 정치/사회에 대한 의견 및 가치관을 드러내는 글`}
                        </span>
                    </style.noticeCard>
            </style.cardBox> 
        : null }
            <style.contentInput type={"text"} placeholder={"글 내용을 입력하세요."} onChange={changeValue("content")}/>
            </Col>
            <Footer />
        </style.Wrap>
    )
}

export default WritePost;