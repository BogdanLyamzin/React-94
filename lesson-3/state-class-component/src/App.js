import MainMenu from "./components/MainMenu/MainMenu";
import ToggleButton from "./components/ToggleButton/ToggleButton";

import menuItems from "./data/menu.json";

function App() {
  return (
    <div className="App">
      <MainMenu items={menuItems} />
      {/* 
      const obj = new MainMenu({items: menuItems});
      obj.render();
      */}
      <ToggleButton text="Click me" />
    </div>
  );
}

export default App;
