import logo from './logo.svg';
import './App.css';

function App() {

  function openEval(){
    return alert("1");
  }

  function openEval1(){
    return "<script>alert('hacked')</script>"
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
