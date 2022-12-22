import react from "react";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

function WritePost(props) {

    const UploadPost = () => {
        alert("upload clicked");
    }

    return (
        <style.Wrap>
            <Header title={"글 작성하기"} onClick={UploadPost}/>
            <style.titleInput type={"text"} placeholder={"제목"}/>
            <style.cardBox>
                <style.noticeCard>
                    <span style={{fontWeight: "700"}}> {`이런 글은 작성하실 수 없어요. \n`} </span>
                    <span style={{fontWeight: "500"}}>
                        {`· 타인의 권리를 침해하거나 불쾌감을 주는 글 
                        · 범죄, 불법 행위 등 법령을 위반하는 글 
                        · 광고/홍보 목적의 글 
                        · 정치/사회에 대한 의견 및 가치관을 드러내는 글`}
                    </span>
                </style.noticeCard>
            </style.cardBox>    
            <style.contentInput type={"text"} placeholder={"글 내용을 입력하세요."}/>
            <Footer />
        </style.Wrap>
    )
}

export default WritePost;