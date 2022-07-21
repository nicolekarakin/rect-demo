export type greeting={name:string, date:string}

export default function Greeting(props:greeting){

    return (
        <div>
            <h1>Hellooooo {props.name}!!</h1>
        <p>Today is {props.date}</p>
        </div>
    )
}