import { FormAddContacts } from "components/FormAddContacts/FormAddContacts";
import React from "react";


export class Phonebook  extends React.Component{

    state = {
        contacts: [],
        name: "",
    }

    handlerChangeContacts = (e) =>{
        this.setState( state =>({[e.target.name]: e.target.value}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements)
        
        this.setState( state =>({contacts: state.contacts.push({name: state.name})}))
    }



    render(){
        console.log(this.state)
        return(
            <FormAddContacts  inputFunc={this.handlerChangeContacts} submitFunc = {this.onSubmit}/>
        )
    }

}