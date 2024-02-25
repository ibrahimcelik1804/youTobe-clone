import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pades/Feed";
import VideoDetail from "./pades/VideoDetail";
import SearchResults from "./pades/SearchResults";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/watch" element={<VideoDetail/>} />
        <Route path="/results" element={<SearchResults/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
