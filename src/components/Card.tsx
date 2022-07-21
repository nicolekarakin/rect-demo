import {CardType} from "../types/CardType"
import styled from "styled-components";
// import type { AppProps } from 'next/app';

// npm install styled-components --save
// export type WrapCardType={card:CardType}
// export default function Card(props:{cardp:CardType}){
const Card=(props:{cardp:CardType})=>{
    // let mtype=<></>
    // if(props.cardp.type)mtype=<b>{props.cardp.type}<br/></b>
    return (
        <CardW>
            <section>
            <img src={props.cardp.image}/>
            <h3>{props.cardp.name}</h3>
                </section>
            <section>

                <p>
                    <b>{props.cardp.status} :: {props.cardp.gender}</b> <br/>
                    {/*{mtype}*/}
                    {props.cardp.type && <b>{props.cardp.type}<br/></b>}
                    First seen in: <a href={props.cardp.origin.url}>{props.cardp.origin.name}</a><br/>
                    Last known location: <a href={props.cardp.location.url}>{props.cardp.location.name}</a>
                </p>
            </section>

        </CardW>
    )
}
export default Card;



const CardW = styled.article`
  color: #472947;
    background-color: #ffbcf6;
    padding: 1.3em;
    margin: 1em;
    border-radius: 12px;
    box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
    border-top: 2px solid #742b83;
    border-bottom: 2px solid #634a77;
    border-left: 2px solid #ff00c894;
    border-right: 2px solid #fe01c7b5;

    flex-basis: 200px;
    display: flex;
    max-width: 300px;
    min-width: 100px;
    flex-flow: column;
    flex-grow: 1;

    justify-content: space-between;
    section{
        display: flex;
    flex-direction: column;
    }
    h3{
    font-size: 1.5em;
    color:white;
    margin-top: 0;
    }
    a{
    color:black;
    }
    a:hover{
    color:#742b83;
    }
    img{
    border: 1px solid white;
        margin-bottom: 1em;
    display: block;
    min-width: 100px;
    max-width:300px;
    max-height:300px;
    width: auto;
    height: auto;

    }
`