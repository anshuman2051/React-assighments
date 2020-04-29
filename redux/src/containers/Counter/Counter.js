import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux';        //connect is a function which returns a higher order comp.

class Counter extends Component {

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 4" clicked={ ()=>this.props.onAddCounter(4) }  />
                <CounterControl label="Subtract 5" clicked={()=>this.props.onSubtractCounter(5)}  />
            </div>
        );
    }
}

const mapStateToProps = state=>{            //maps state from redux to props here
    return {
        ctr : state.counter 
    };
}

//dispatch function
const mapDispatchToProps = dispatch=>{
    return{
        onIncrementCounter : ()=> dispatch({type: "INCREMENT"}),
        onDecrementCounter : ()=> dispatch({ type: "DECREMENT"}),
        onAddCounter : (val)=> dispatch({ type: "ADDED", value: val}),
        onSubtractCounter : (val)=> dispatch({type: "SUBTRACTED", value: val})
    };

};

export default connect( mapStateToProps , mapDispatchToProps)(Counter);