import MainMenu from "./components/MainMenu/MainMenu";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Vote from "./components/Vote/Vote";
import MyBooks from "./components/MyBooks/MyBooks";
import Posts from "./components/Posts/Posts";
import PostsSearch from "./components/PostsSearch/PostsSearch";

import menuItems from "./data/menu.json";

function App() {
  return (
    <div className="App">
      {/* <MainMenu items={menuItems} /> */}
      {/* <ToggleButton text="Click me" type="button" /> */}
      {/* <Vote /> */}
      {/* <MyBooks /> */}
      {/* <Posts /> */}
      <PostsSearch />
    </div>
  );
}

export default App;
