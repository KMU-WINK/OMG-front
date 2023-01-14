import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/login";
import Main from "./pages/Main/main";
import Map from "./pages/Map/map";
import MyPage from "./pages/MyPage/myPage";
import Notification from "./pages/Notification/Notification";
import Join from "./pages/Join/join";
import Board from "./pages/Board/board";
import Setting from "./pages/Setting/setting";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import WritePost from "./pages/WritePost/WritePost";
import PostDetail from "./pages/PostDetail/postDetail";
import Add from "./pages/Add/add";
import Add2 from "./pages/Add/Add2";
import Registration from "./pages/Registration/Registration";
import BottleDetail from "./pages/BottleDetail/bottleDetail";
import FindEmail from "./pages/FindEmail/FindEmail";
import PickUp from "./pages/PickUp/PickUp";

function App() {
  return (
    <div
      className="App"
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        minHeight: "100%",
        width: "auto",
        position: "relative",
        wordBreak: "keep-all",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/map" element={<Map />} />
          <Route path="/noti" element={<Notification />} />
          <Route path="/mypage/:id" element={<MyPage />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/find-email" element={<FindEmail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/add2" element={<Add2 />} />
          <Route path="/write-post" element={<WritePost />} />
          <Route path="/post-detail" element={<PostDetail />} />
          <Route path="/bottle-detail" element={<BottleDetail />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/pick-up" element={<PickUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
