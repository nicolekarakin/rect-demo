import React, {useEffect, useState} from 'react';
//import './Exp1.css';
//import Exp1 from "./components/reactold/Exp1";
import MHeader from "./components/MHeader";
import Gallery from "./components/Gallery";
//import data from "./galery.json" ;
import {CardType} from "./types/CardType";
import axios from "axios";

function App() {
    //enforce datatype with as ...
    //const allCards:CardType[]=data as CardType[]
    // @ts-ignore
    //const allCards:CardType[]=data

    const [allCards, setAllCards] = useState<CardType[]>([])
    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = () => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setAllCards(data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }

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
