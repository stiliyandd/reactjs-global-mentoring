import './App.css';
import { Counter } from './components/Counter';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Counter />
          <Search />
        </main>
      </header>
    </div>
  );
}

export default App;
