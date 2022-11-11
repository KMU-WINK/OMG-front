import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./pages/Login/login";

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
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
