import { Contacts } from "components/Contacts/Contacts";
import { FormAddContacts } from "components/FormAddContacts/FormAddContacts";
import React from "react";
import nextId from "react-id-generator";


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
        console.log(e.target.elements);
        
        this.setState( state =>{
            return(
                {
                   contacts: [...state.contacts, {id: nextId(), name: state.name}],
                })
        })
    }



    render(){
        console.log(this.state)
        return(
            <>
            <FormAddContacts  inputFunc={this.handlerChangeContacts} submitFunc = {this.onSubmit}/>
            <Contacts contacts={this.state.contacts}/>
            </>
            
        )
    }

}