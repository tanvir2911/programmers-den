import './App.css';
import Header from './components/Header/Header';
import Programmers from './components/Programmers/Programmers';

function App() {

  return (
    <div className="App" style={{
      backgroundColor: "darkgoldenrod",
      padding: "5px"
    }}>
      <Header />
      <Programmers />
    </div>
  );
}

export default App;
