import React from "react";
import * as style from "./styles";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

function PostDetail(props) {
    const clickMenu = () => {
        alert("메뉴 클릭")
    }

    return (
        <style.Wrap>
            <Header title={"게시글"} onClick={clickMenu}/>
        </style.Wrap>
    )
}

export default PostDetail;