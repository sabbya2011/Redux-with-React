import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
    increment,
    decrement,
    add,
    subtract,
    storeResult,
    deleteResult
} from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
            default:
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={()=>this.props.onAddCounter(5)}/>
                <CounterControl label="Subtract 5" clicked={()=>this.props.onSubtractCounter(5)}/>
                <CounterControl label="Store Result" clicked={()=>this.props.onStoreResult(this.props.ctr)}/>
                <ul>
                    {this.props.results.map(result=><li key={result.id} onClick={()=>this.props.onDeleteResult(result.id)}>{result.val}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr:state.counter.counter,
        results:state.result.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () =>{
            dispatch(increment());
        },
        onDecrementCounter : () =>{
            dispatch(decrement());
        },
        onAddCounter : (payload) =>{
            dispatch(add(payload));
        },
        onSubtractCounter : (payload) =>{
            dispatch(subtract(payload));
        }, 
        onStoreResult : (payload) =>{
            dispatch(storeResult(payload));
        },
        onDeleteResult : (payload) =>{
            dispatch(deleteResult(payload));
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);