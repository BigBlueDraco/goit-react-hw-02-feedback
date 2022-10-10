import { number } from "prop-types"

export const Contacts = ({contacts, searcheFunc, filter, deletFunc}) =>{
    return(
        <>
        <input type="text" name="filter" onInput={(e)=>searcheFunc(e)} />
        <ul>
            {contacts.filter(({name})=> name.includes(filter)).map(elem=> (<ContactsItem 
            key={elem.id} 
            id = {elem.id} 
            name={elem.name} 
            number={elem.number} 
            deletFunc={deletFunc}/>))}
        </ul>  
        </>  
    )
}

const ContactsItem=({id, name, number, deletFunc})=>{
    return(
        <li id={id}>
            {name}
            {number}
            <button data-id={id} onClick={(e)=>deletFunc(e)}>Delete</button>
        </li>
    )
}