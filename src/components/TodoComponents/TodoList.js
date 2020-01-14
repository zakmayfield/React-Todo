import React, { useState, useEffect } from 'react';
import Item from './Item';

const TodoList = props => {

  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState(props.thingsToDo);

  useEffect(() => {
    setSearchResults(
      props.thingsToDo.filter(item => {
        if(item.name.toLowerCase().includes(inputText.toLowerCase())){
          return item.name;
        }
      })
    )
      //LEFT OFF HERE, looking though search results to find out how to map over it
    console.log('Search RESULTS', searchResults)
  }, [inputText, props.thingsToDo])

  const handleChange = e => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return(
    <div className="listContainer">
      <h4>Click on a task to mark as complete</h4>
      <input 
        className="searchBar" 
        type="text" 
        name="search" 
        placeHolder="Search for a task here!"
        onChange={handleChange}
        value={inputText}
      />

      <p>
        {
          props.thingsToDo.map(item => {
            return(
              <Item key={item.id} item={item} toggleItem={props.toggleItem} />
            )
          })
        }
      </p>
      {/* 11.) Above looks familiar, were taking our props --thingsToDo-- and then mapping over them, for each item in the array we are assigning a key property the value of id, and then assigning the item prop as the whole item itself, which we will use to render within our <Item /> component IGNORE TOGGLE ITEM --> continue to Item.js */}

      {/* 16.) we then pass our toggleItem prop down as props to <Item /> --? continue to Item.js */}

      <div className="btnContainer">
        <button className="saveBtn" onClick={props.saveTasks}>Save</button>
        <button className="deleteBtn" onClick={props.deleteTask}>Delete Completed</button>
      </div>
    </div>
  ) 
}

export default TodoList;