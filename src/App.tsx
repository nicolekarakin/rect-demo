import React from 'react';
// import './Exp1.css';
import MHeader from "./components/MHeader";
import Gallery from "./components/Gallery";
import Exp1 from "./components/reactold/Exp1";
import data from "./galery.json" ;
import {CardType} from "./types/CardType";

function App() {
    //enforce datatype with as ...
    //const allCards:CardType[]=data as CardType[]
    // @ts-ignore
    const allCards:CardType[]=data
  return (
    <div className="App">
      <header className="App-header">
{/*<Exp1></Exp1>*/}
          <MHeader/>
      </header>

        <Gallery cards={allCards}/>

    </div>
  );
}

export default App;
