import MainMenu from "./components/MainMenu/MainMenu";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Vote from "./components/Vote/Vote";

import menuItems from "./data/menu.json";

function App() {
  return (
    <div className="App">
      <MainMenu items={menuItems} />
      {/* 
      const obj = new MainMenu({items: menuItems});
      obj.render();
      */}
      <ToggleButton text="Click me" type="button" />
      <Vote />
    </div>
  );
}

export default App;
