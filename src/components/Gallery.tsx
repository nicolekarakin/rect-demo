import Card from "./Card";
import {CardType} from "../types/CardType";
import styled from "styled-components";
import {useState} from "react";
import FilterBar from "./FilterBar";

export default function Gallery(props:{cards:CardType[]}){
    const [chname,setChname]=useState<string>("")
    const [gender,setGender]=useState<string>("")
    const filtered:CardType[]=props.cards
        .filter(a=>{
            if(chname.length>0)return a.name.toLowerCase().includes(chname.toLowerCase())
            else return true
        })
        .filter(a=>{
            if(gender.length>0)return a.gender===gender
            else return true
        })



    return (
        <GalleryW>
            <FilterBar  setChname={setChname} setGender={setGender}/>
            {filtered && filtered.map( (a: CardType) => <Card  cardp={a} key={a.id}/> )}

            {!filtered.length && <p id="notFound"><b>Not Found!!</b> </p>}
            {/*<>{console.log(filtered.length, (!!filtered))}</>*/}
        </GalleryW>
    )

}

const GalleryW=styled.div`
  align-items: stretch;
    justify-content: center;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    padding: .7em;
    
    #notFound{
    margin: auto;
    }
`