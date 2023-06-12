import { Component2 } from './Component2';
import './App.css';
import { Component1 } from './Component1';
import { Component3 } from './Component3';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <div className='dfv'>
        <Component1></Component1>
        <div className='div'>
          <Component2></Component2>
          <Component3></Component3>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
