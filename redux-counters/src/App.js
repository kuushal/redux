
import './App.css';
import Counter from './components/Counter/Counter';
import CounterEven from './components/CounterEven/CounterEven';

function App({ store, evenStore }) {
  return (
    <div className="App">
      <Counter store={store} />
      <CounterEven store={store} />
    </div>
  );
}

export default App;
