import './App.css';
import Todos from './components/Todo.js';
import { BrowserRouter as Router,Route} from 'react-router-dom'; 
  import Header from './components/layouts/Header.js';
import React, {Component} from 'react';
import Addtodo from './components/Addtodo.js'; 
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Axios from 'axios';

class App extends Component
{
     state = {
      todos : []
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos : res.data})) 
    }



    styles = () =>
    {
       return{
        backgroundColor: "lightblue"
       }
    }

    markComplete  = (id) => 
    {
       this.setState({ todos : this.state.todos.map(todo => { 
       
        if(todo.id === id)
        {
              todo.completed =! todo.completed;   
        }
        return todo;
       }) });
    }


    // Delete Todo
    delTodo = (id) =>
    {
       Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id  )] }));
    } 

    addTodo = (title) => {
         
      Axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,
        completed:false
      }).then(res => this.setState({todos : [...this.state.todos,res.data]}));
    } 


     render() {
       return (
        
          <Router>
          <div className="App" style = {this.styles()}>            
               
               <Header/>
               <Route exact path="/" render={prop => (
                  <React.Fragment>
                      <Addtodo addTodo = {this.addTodo}/>
                      <Todos  todos={this.state.todos}  markComplete = {this.markComplete}  delTodo = {this.delTodo} />       
                  </React.Fragment>
               )} />

               <Route exact path="/about" component = {About}/>
               <Route exact path="/contact" component = {Contact}/>
          </div>  
          </Router> 
       );

     }
}

export default App;
