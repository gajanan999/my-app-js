import './App.css';

import UITheme from './components/UITheme';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <UITheme></UITheme>
        <div style={{fontSize:24}} className="hello-world">
          Hello world
      </div>
      </header>
    </div>
  );
}

export default App;
