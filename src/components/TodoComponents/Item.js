import React from 'react';

const Item = props => {
  return (
    <div>
      <div 
        className={
          `item ${props.item.completed ? 'completed' : ''}`
        }
        // 18.) here we are giving our className logic, basically we are saying is "props.item.completed true? if so, add 'completed' to the className, if completed is false add nothing else to the className" so essentially if completed is true the className="item completed", and if false className="item" and then based on if the className has completed in it as a class it will be styled with a strike through text-decoration within our CSS file.

        // 19.) Now we are finished with our 'completed functionality' Lets start on 'deleting functionality' --> go back to App.js
        onClick={
          () => {
            props.toggleItem(props.item.id)
          }
        }
        // 17.) we then take our prop toggleItem and call it on our item in an onClick event listener and pass in that items id into the toggleItem parameter slot so then it can take it back to the function and compare the id's to see if they are the same to execute the if statement
      >
        <p className="listItem">{props.item.name}</p>
      </div>
      {/* 12.) Here we are then taking our prop --item-- and then taking the data from item and rendering what we need to the screen, in this case we are just rendering the name of the task.
      
      We are now finished with the functionality of adding a task to our todo list, now we need to work on the functionality of clicking a task and 'completing' that task 
      
      --> back to App.js*/}
    </div>
  )
}

export default Item;