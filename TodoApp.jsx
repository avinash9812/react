import { useState } from "react"
export default function TodoApp()
{
    const [tasks, setTasks] = useState([]);

let AddTask=()=>{
        let input = document.querySelector("input");
        let task = input.value;
        let newTasks = [...tasks, task];                //listing in the display so     ""...""     used
        setTasks(newTasks);
        input.value = "";
}

let DeleteTaskAll=()=>{
    let newTasks=[];
    setTasks(newTasks);
    console.log("DeleteTaskAll");
}

let UpperCaseAll=()=>{
    let newTasks = tasks.map((task)=>{
        return task.toUpperCase();
        
 });
 setTasks(newTasks);
 console.log("UpperCaseAll");
}

let lowerCaseAll=()=>{
    let newTasks=tasks.map((task)=>{
        return task.toLowerCase();
    });
    setTasks(newTasks);
}



 return (
        <div className="TodoApp">
        <h2>Todo App</h2>
        <input placeholder="Add your Task" />
        <br /> <br />
        <button onClick={AddTask}>Add</button>
        <br /> <br />

        <hr />

<div className="container">

        <h4>actions</h4>
        <button onClick={UpperCaseAll}>UPPERCASE ALL</button>
        <br /> <br />
        <button onClick={lowerCaseAll}>LOWERCASE ALL</button>
        <br /> <br />
        <button onClick={DeleteTaskAll}>DELETE ALL</button>
        <br /> <br />
        <hr />

</div>
        <ul>
{
    tasks.map((tasks)=>{
       
       return (<li>{tasks}
       &nbsp;&nbsp;&nbsp;

   
         
       </li>  )
                                          //show the lists in display
    })
}
        </ul>
        </div>
    )
}
