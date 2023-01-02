import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./pages/Login/login";
import Main from "./pages/Main/main";
import Map from "./pages/Map/map";
import MyPage from "./pages/MyPage/myPage";
import Noti from "./pages/Noti/noti";
import Join from "./pages/Join/join";
import Board from "./pages/Board/board";
import Setting from "./pages/Setting/setting";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import WritePost from './pages/WritePost/WritePost';
import PostDetail from './pages/PostDetail/postDetail';
import Add from './pages/Add/add';

function App() {
  return (
    <div className="App" style={{
        maxWidth: '480px',
        margin: '0 auto',
        minHeight: '100%',
        width: 'auto',
        position: 'relative',
        wordBreak: 'keep-all',
    }}>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/" element={<Main/>} />
                <Route path="/board" element={<Board/>} />
                <Route path="/map" element={<Map/>} />
                <Route path="/noti" element={<Noti/>} />
                <Route path="/mypage" element={<MyPage/>} />
                <Route path="/setting" element={<Setting/>} />
                <Route path="/change-password" element={<ChangePassword/>} />
                <Route path="/add" element={<Add/>} />
                <Route path="/write-post" element={<WritePost/>} />
                <Route path="/post-detail" element={<PostDetail/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
