import React from "react";
import nextId from "react-id-generator";

import { Contacts } from "components/Contacts/Contacts";
import { FormAddContacts } from "components/FormAddContacts/FormAddContacts";

export class Phonebook  extends React.Component{

    state = {
        contacts: [],
        filter: '',
        options: {
          name: "", 
          number: '', 
        }    
    }

    changeHandler = (e) =>{
        const {name, value} = e.target;
        this.setState( state =>({ options:{ ...state.options, [name]: value}}));    
    }
    searcheHandler = (e) =>{
        this.setState(state=>({filter: e.target.value.toLowerCase()}))
    }
    onSubmit = (data) => {
        console.log(data);
        if(this.state.contacts.findIndex(elem => elem.name === data.name) !== -1){
            alert("Contact already exists")
            return
        }
        this.setState( state => {
            return(
            {
                contacts: [...state.contacts, {id: nextId(), name: data.name, number: data.number}],
            })
        })
    }

    deleteContact = (e) =>{
        const index = this.state.contacts.findIndex(elem => elem.id === e.target.dataset.id)

        this.setState( state => {
            const contacts = state.contacts;
            contacts.splice(index, 1);
            console.log(contacts);
            return(
            {
                contacts: [...contacts],
            })
        })
    }

    render(){
        return(
            <>
            <FormAddContacts  inputFunc={this.changeHandler} submitFunc = {this.onSubmit}/>
            <Contacts contacts={this.state.contacts} 
            filter={this.state.filter} 
            searcheFunc = {this.searcheHandler}
            deletFunc = {this.deleteContact}/>
            </>
            
        )
    }
}