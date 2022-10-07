export const Contacts = ({contacts}) =>{
    return(
        <>
        {console.log(contacts)}
        {contacts.map(elem=> (<span key={elem.id}>{elem.name}</span>))}
        </>
        
    )
}