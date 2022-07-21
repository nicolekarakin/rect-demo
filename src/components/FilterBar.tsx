import styled from "styled-components";

type FilterBarProps={
    setChname:(a:string)=>void,
    setGender:(a:string)=>void
}

const FilterBar=( props: FilterBarProps )=>{

    return(
        <FilterBarW>
            <form>
                <label htmlFor="nameId" >Name </label>
                <input id="nameId" type="text" onChange={(e)=>props.setChname(e.target.value)}/>
            </form>
            <form>
                <label htmlFor="femaleId" >Female</label>
                <input id="femaleId" type="radio" value="Female" name="genderI" onChange={(e)=>props.setGender(e.target.value)}/>
                <label htmlFor="maleId" >Male</label>
                <input id="maleId" type="radio" value="Male" name="genderI" onChange={(e)=>props.setGender(e.target.value)}/>
                <label htmlFor="unknownId" >Unknown</label>
                <input id="unknownId" type="radio" value="unknown" name="genderI" onChange={(e)=>props.setGender(e.target.value)}/>
                <label htmlFor="genderlessId" >Genderless</label>
                <input id="genderlessId" type="radio" value="Genderless" name="genderI" onChange={(e)=>props.setGender(e.target.value)}/>
            </form>
        </FilterBarW>
    )
}
export default FilterBar


const FilterBarW = styled.div`
    text-align: center;
    display: block;
    width: 100%;
    input{
        margin-right:1.8em;
    }
   
    form{
        margin: .7em;
    }
`