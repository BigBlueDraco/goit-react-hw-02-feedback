import { Contacts } from "components/Contacts/Contacts";
import { FormAddContacts } from "components/FormAddContacts/FormAddContacts";
import React from "react";
import nextId from "react-id-generator";

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
        console.log(value)
        console.log(name)
        this.setState( state =>({ options:{ ...state.options, [name]: value}}));
        
    }
    searcheHandler = (e) =>{
        this.setState(state=>({filter: e.target.value}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements)
        this.setState( state => {
            const id = nextId();
            return(
            {
                contacts: [...state.contacts, {id: id, name: state.options.name, number: state.options.number}],
            })
        })
    }



    render(){
        console.log(this.state)
        return(
            <>
            <FormAddContacts  inputFunc={this.changeHandler} submitFunc = {this.onSubmit}/>
            <Contacts contacts={this.state.contacts} filter={this.state.filter} searcheFunc = {this.searcheHandler}/>
            </>
            
        )
    }
}