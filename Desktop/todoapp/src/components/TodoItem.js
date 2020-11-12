import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => 
    {
        return {

            background: 'LightGrey',
            padding: '10px',
            borderBottom: '2px #000000 dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
        
    } 
    styleButton = () => 
    {
        return {
            background : '#ff0000',
            color : '#fff',
            border : 'none',
            padding : '5px 9px',
            borderRadius: '50%',
            cursor : 'pointer',
            float: ' right'
        }
    }

    render() 
    {

        
      const {id,title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                  <button onClick = {this.props.delTodo.bind(this,id)}  style = {this.styleButton()}> X </button>
                  <input type="checkbox" onChange = {this.props.markComplete.bind(this,id)}/>
                  <p> {title} </p>
            </div>
        )
    }
}



TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}


export default TodoItem;
