import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionTypes from '../Store/actions';
import {connect} from 'react-redux';

class Persons extends Component {
    state = {
        // persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        console.log(this.props);
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return(
        {
            persons : state.persons
        }
    );
};
const mapDispatchtoProps = dispatch =>{
    return{
        onPersonAdded : ()=> dispatch({type: actionTypes.ADD_PERSON }),
        onPersonDeleted: (pid)=> dispatch({type: actionTypes.DELETE_PERSON, id: pid}),
    };
};
export default connect(mapStateToProps, mapDispatchtoProps )(Persons);