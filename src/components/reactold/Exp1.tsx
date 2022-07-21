
import logo from '../../logo.svg';
import '../../Exp1.css';
import Greeting, {greeting} from "./Greeting";
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const d = mm + '::' + dd + '::' + yyyy;
const name:string="Somebody"

const greetings:greeting[]=[
    {name:"Greta",date:""+new Date()},
    {name:"Marta",date:""+new Date()},
    {name:"Marty",date:""+new Date()},
    {name:"Greg",date:""+new Date()}
]

const mydiv="<div>whatever hardcoded</div>"
const myGreeting=<Greeting name={name} date={d} />
const doc=document.getElementById("test1");

export default function Exp1() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <Greeting name={name} date={d}/>
                {
                    greetings.map(a=> <Greeting name={a.name} date={a.date}/>)
                }
                <hr />

                <div dangerouslySetInnerHTML={{ __html: mydiv}} />

                <hr/>

            </header>
            <div id="test1">boo</div>
            {mydiv}
            {myGreeting}
        </div>
    );
}


