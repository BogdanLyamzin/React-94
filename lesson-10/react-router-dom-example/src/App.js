import { Routes, Route } from "react-router-dom";

import MainMenu from "./components/MainMenu/MainMenu";

import HomePage from "./pages/HomePage/HomePage";
import PostsSearchPage from "./pages/PostsSearchPage/PostsSearchPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";

function App() {
  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts-search" element={<PostsSearchPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
