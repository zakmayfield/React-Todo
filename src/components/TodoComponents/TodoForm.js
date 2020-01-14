import React from 'react';

class TodoForm extends React.Component{
  constructor(){
    super();
    this.state={
      taskText: ''
      // 5.) Here we are creating state that we will be updating with our input text field, currently set to empty string
    }
  }

  handleChange = e => {
    this.setState({
      taskText: e.target.value
    })
    // 6.) here we are taking our state and then saying when the input changes we will be updating our state with the value of the input field, if you were to type and then console log taskText it would be updating with each character pressed
  }

  handleSubmit = e => {
    e.preventDefault();
    // 7.) here we are handling our submit, currently we are preventing the form from refreshing the page

    this.state.taskText === '' ?
      // this.state.taskText = null
      alert('Please add a task')
    : 
      this.props.addItem(this.state.taskText)
    // 8.) here we are taking our prop passed down to us from App.js and then adding the newly updated state (value of input field) and passing that value as a parameter for our addItem function, which if you look at what it's doing it's just assigning that parameter to the name property, so whatever you type in will be set as the {name: '<value>'}

    this.state.taskText = ''
    // 9.) here we are just resetting the value of the input field to an empty string or better user experience -- back to App.js
  }

  render(){
    return(
      <div className="outterFormContainer">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="item"
            placeholder="Add task here" 
            value={this.state.taskText} 
            onChange={this.handleChange} 
          />
          <div className="btnContainer">
            <button className="addBtn">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default TodoForm;