import Header from './components/Header';
import CountdownOO from './components/CountdownOO';
import CountdownESA from './components/CountdownESA';
import CountdownSRS from './components/CountdownSRS';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row d-flex justify-content-center">
          <CountdownOO />
          <CountdownESA />
          <CountdownSRS />
      </div>
    </div>
  );
}

export default App;
