import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import {useState} from 'react';

function App() {
  
  let [name2 , setName] = useState("robert");
  function changeame(){
    setName("iron man");
    console.log(name2);
  }
  return (
    <div className="App">
     {/* <h1>Hello world</h1> */}
     {/* <Header age = "22"/> */}
      <h1>{name2}</h1>
     
     <button onClick ={changeame}>click</button>
     <Banner/>
    </div>
  );
}

export default App;
