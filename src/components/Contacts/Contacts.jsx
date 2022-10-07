import { number } from "prop-types"

export const Contacts = ({contacts, searcheFunc, filter}) =>{
    console.log(contacts)
    return(
        <>
        <input type="text" name="filter" onInput={(e)=>searcheFunc(e)} />
        <ul>
            {console.log(contacts.filter(({name})=> name.includes(filter)))}
            {contacts.filter(({name})=> name.includes(filter)).map(elem=> (<ContactsItem key={elem.id} name={elem.name} number={elem.number}/>))}
        </ul>
        
        </>  
    )
}

const ContactsItem=({name, number})=>{
    console.log(name)
    return(
        <li>
            {name}
            {number}
        </li>
    )
}