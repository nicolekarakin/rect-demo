export type CardType={
    image:string,
    id: number,
    name: string,
    url:string,
    type:string,
    status: "Alive" | "Dead" | "unknown",
    "species": "Human",
    "gender": "Male" | "Female" |"Genderless"| "unknown",
    "origin": {
        "name": string,
        "url": string
    },
    "location": {
        "name": string,
        "url": string
    }
}