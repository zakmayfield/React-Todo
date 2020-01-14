import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';


const thingsToDo = [];

class App extends React.Component {

  constructor(){
    super();
    this.state={
      newThingsToDo: thingsToDo
      // 1.) We have to create our state -- newThingsToDo -- with the thingsToDo array up above, and then we will be updating this state with new tasks as we add them
    }
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    }

    // 2.) Here we are creating a function that takes the input text of our form and passes it into our name property, with dynamic id's and preset completion to false

    this.setState({
      newThingsToDo: [...this.state.newThingsToDo, newItem]
    })
    // 3.) Here we are taking our state -- newThingsToDo -- and spreading the previously created tasks, and then added that new task that we created just above to the end of our state array. 
  }

  toggleItem = id => {
    const newList = this.state.newThingsToDo.map(item => {
      if(item.id === id){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    });
    // 13.) Here we are now starting our functionality of the 'completed task' so we create this method toggleItem and we pass in an id as a param, inside of toggleItem we are mapping over our state of --newThingsToDo-- and trying to see if the id that is being passed in is the same id as the item we clicked, hence the if statement, if the id's match then we will return that item spread --...item-- to maintain all of its properties and then we are saying if the id's match we will asign the completed property the opposite value like so : !item.completed -> if completed will be false, if not will be true. If the item id does not match, just return the item untouched.

    this.setState({
      newThingsToDo: newList
    })
    // 14.) Here we are now updating our state with the new item ( with the updated completed property ) and just pushing that newList in place of our old state.
  }

  deleteTask = () => {
    const nonCompletedList = this.state.newThingsToDo.filter(item => {
      return item.completed === false;
    })
    // 20.) Here we create a deleteTask method that we will pass down as props to our TodoList. What we are doing here is creating a new array of items called nonCompletedList, we achieve this by filtering through our state and then returning each item that has their completed property set to false ( not completed ) 

    this.setState({
      newThingsToDo: nonCompletedList
    })
    // 21.) and then when we click delete which executes this function, it then passes our nonCompletedList to our state and replaces it with the task items that have not been selected to delete. AND WE ARE FINISHED!!!
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
          {/* 4.) here we are passing our addItem method down to our TodoForm so that way our form will be able to access this method --> continue to TodoForm.js */}

        <TodoList thingsToDo={this.state.newThingsToDo} deleteTask={this.deleteTask} toggleItem={this.toggleItem}/>
          {/* 10.) here with ***thingsToDo={this.state.newThingsToDo}*** ignore toggleItem, we are passing our state of --newThingsToDo-- down to our TodoList component as thingsToDo --> continue to TodoList.js */}
          {/* 15.) we then pass our method down as props via toggleItem --> continue to TodoList.js */}
      </div>
    );
  }
}

export default App;
